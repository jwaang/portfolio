"use client";

import { PageInfo } from "@/typings";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:jonathan.wang1996@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}! ${formData.message} (${formData.email})`;
  };
  const { address, email, phoneNumber } = pageInfo;

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">&nbsp;Contact</h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          <span className="decoration-accent-50 underline">Let&apos;s talk.</span>
        </h4>
        <div className="space-y-5 md:space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="contactIcons" />
            <p className="text-base md:text-2xl">{phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="contactIcons" />
            <p className="text-base md:text-2xl">{email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="contactIcons" />
            <p className="text-base md:text-2xl">{address}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-screen px-6 md:w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register("name")} placeholder="Name" className="contactInput w-1/2" type="text" />
            <input {...register("email")} placeholder="Email" className="contactInput w-1/2" type="email" />
          </div>
          <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />
          <textarea {...register("message")} placeholder="Message" className="contactInput" />
          <button type="submit" className="bg-accent py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
