import {
  ChatBubbleBottomCenterIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import React, { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
}

interface FormErrors {
  name: string | null;
  email: string | null;
  message: string | null;
  phone: string | null;
}

const Contact = () => {
  // EmailJS
  // =====================================================================
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setFormData({ name: "", email: "", message: "", phone: "" });
      setErrors({ name: null, email: null, message: null, phone: null });
      if (form.current) {
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID!,
            process.env.NEXT_PUBLIC_TEMPLATE_ID!,
            form.current,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log(result.text, "SUCCESS! - Sent Message");
            },
            (error) => {
              console.log("FAILED...", error);
            }
          );
      }
    }
  };

  // =====================================================================

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: null,
    email: null,
    message: null,
    phone: null,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

  const validateForm = (): boolean => {
    let newErrors: FormErrors = {
      name: null,
      email: null,
      message: null,
      phone: null,
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email. example@email.com";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }
    if (formData.phone && !/^(\+?\d{1,3}[- ]?)?\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number. 1234567890";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div
      id="contact"
      className="scroll-m-[14vh] bg-[#26282d] pb-12 pt-16 md:pt-32 flex items-center justify-center"
    >
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-2 w-4/5 md:gap-12 gap-1 mx-auto items-start"
      >
        <div>
          <h1 className="text-2xl font-bold uppercase text-[#55e6a5] mb-4">
            Contact Me
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-white">
            Keep In <span className="text-green-500">Touch</span>
          </h2>
          <div className="flex items-center space-x-0 md:space-x-10 md:mb-12 mb-6">
            <span className="w-12 hidden md:block h-1 bg-slate-400 rounded-sm"></span>
            <p className="text-lg text-slate-300">
              Thank you for your interest and support. If you have any questions
              or would like to get in touch, please fill out the form below or
              reach out directly.
            </p>
          </div>
        </div>
        {/* ====================================================== */}
        {/* Form */}
        <div className="flex flex-col justify-center text-white space-y-6">
          <form ref={form} onSubmit={sendEmail} noValidate>
            {/* Name input */}
            <div className="relative w-full shadow-sm ">
              <div className="absolute inset-0 pl-2 flex items-center pointer-events-none">
                <UserCircleIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-4 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 lg:text-[1.2rem] md:text-[1.125rem] text-[1rem]"
                placeholder="Full Name"
                required
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs my-2">{errors.name}</p>
            )}
            {/* Email input */}
            <div
              className={`relative w-full shadow-sm ${
                !errors.name && "lg:mt-8 mt-5"
              }`}
            >
              <div className="absolute inset-0 pl-2 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-4 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 lg:text-[1.2rem] md:text-[1.125rem] text-[1rem]"
                placeholder="example@email.com"
                required
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs my-2">{errors.email}</p>
            )}

            {/* Phone number input */}
            <div
              className={`relative w-full shadow-sm ${
                !errors.email && "lg:mt-8 mt-5"
              }`}
            >
              <div className="absolute inset-0 pl-2 flex items-center pointer-events-none">
                <PhoneIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-4 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 lg:text-[1.2rem] md:text-[1.125rem] text-[1rem] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="1234567890"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs my-2">{errors.phone}</p>
            )}

            {/* Message textarea */}
            <div
              className={`relative w-full shadow-sm ${
                !errors.phone && "lg:mt-8 mt-5"
              }`}
            >
              <div className="absolute inset-y-0 left-0 pl-2 pt-4 pointer-events-none">
                <ChatBubbleBottomCenterIcon className="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-4 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 lg:text-[1.2rem] md:text-[1.125rem] text-[1rem]"
                rows={5}
                cols={30}
                placeholder="Your Message..."
                required
              ></textarea>
            </div>
            {errors.message && (
              <p className="text-red-500 text-xs my-2">{errors.message}</p>
            )}

            {/* Submit button */}
            <div
              className={`flex justify-end ${
                !errors.message && "lg:mt-6 mt-5"
              }`}
            >
              <button
                type="submit"
                className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-[#dfff00] transition-colors items-center"
              >
                Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
