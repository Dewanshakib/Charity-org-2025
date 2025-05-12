'use client';
import Image from "next/image";
import { useFormStatus } from 'react-dom';
import toast, { Toaster } from "react-hot-toast";
import { motion as m } from "framer-motion";
import { registerMember } from "@/actions/registerActions";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const { pending } = useFormStatus();
  
  async function clientAction(formData) {
    const result = await registerMember(formData);
    
    if (result.success) {
      toast("অভিনন্দন এখন আপনি স্বস্তির ছায়ার একজন সদস্য");
      // Reset form
      formData.target?.reset();
      // Redirect after 2 seconds
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } else {
      toast.error("দুঃখিত, একটি ত্রুটি ঘটেছে");
    }
  }

  return (
    <div className="w-full h-auto bg-gradient-to-r from-rose-100 to-teal-100  grid grid-rows-1 md:grid-cols-2">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-auto md:hidden"
      >
        <Image
          width={2000}
          height={2000}
          className="w-full h-full"
          src={"/mobile-m.png"}
          alt="Register background mobile"
        />
      </m.div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:h-screen "
      >
        <Image
          width={2000}
          height={2000}
          className="w-full h-full hidden md:block opacity-0 duration-[2s]"
          src={"/register-d.png"}
          alt="Register background mobile"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </m.div>
      <div className="w-full px-5 pb-4 md:pt-10 md:px-8">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent from-orange-700 to-cyan-400 md:text-3xl xl:text-4xl text-center mt-6">
          রেজিস্ট্রেশন ফর্ম
        </h2>
        <form
          action={clientAction}
          className="flex w-full flex-col font-medium gap-1"
        >
          <label htmlFor="name">নাম</label>
          <input
            required
            name="name"
            className="w-full border-2  border-gray-300 rounded-md px-4 py-2"
            type="text"
            placeholder="নাম লিখুন"
          />
          <label htmlFor="fatherName">পিতার নাম</label>
          <input
            required
            name="fatherName"
            className="w-full border-2  border-gray-300 rounded-md px-4 py-2"
            type="text"
            placeholder="পিতার নাম লিখুন"
          />
          <label htmlFor="motherName">মাতার নাম</label>
          <input
            required
            name="motherName"
            className="w-full border-2  border-gray-300 rounded-md px-4 py-2"
            type="text"
            placeholder="মাতার নাম লিখুন"
          />
          <label htmlFor="birthDate">জন্ম তারিখ</label>
          <input
            required
            name="birthDate"
            className="w-full border-2  border-gray-300 rounded-md px-4 py-2"
            type="date"
          />
          <label htmlFor="number">ফোন নম্বর</label>
          <input
            required
            name="number"
            className="w-full border-2  border-gray-300 rounded-md px-4 py-2"
            type="number"
            placeholder="ফোন নম্বর দিন"
          />
          <label htmlFor="className">কোন ক্লাস / কলেজ / ইউনিভার্সিটি</label>
          <input
            required
            name="className"
            className="w-full border-2  border-gray-300 rounded-md px-4 py-2"
            type="text"
            placeholder="কোন ক্লাস / কলেজ / ইউনিভার্সিটি লিখুন"
          />
          <label htmlFor="studying">প্রতিষ্ঠান</label>
          <input
            required
            name="studying"
            className="w-full border-2  border-gray-300 rounded-md px-4 py-2"
            type="text"
            placeholder="প্রতিষ্ঠানের নাম লিখুন"
          />
          <button
            type="submit"
            disabled={pending}
            className="relative inline-flex mt-4 items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              {pending ? 'প্রক্রিয়াজাতকরণ...' : 'রেজিস্টার'}
            </span>
            <span className="relative invisible">রেজিস্টার</span>
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
