"use client"
import Link from "next/link";
import { FaFacebookF, FaGoogle, FaRegEnvelope, FaGithub } from "react-icons/fa";
const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <form
        // onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center"
      >
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl max-h-screen">
          <div className="w-full md:w-2/5 bg-black text-white rounded-tl-2xl rounded-bl-2xl py-6 md:py-36 px-4 md:px-12">
            <h2 className="text-3xl font-bold mb-2">Halo, Sobat MBCcoins! </h2>
            <div className="border-2 w-20 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Isi informasi pribadi untuk memulai perjalanan bersama kami
            </p>
            <button
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black"
              type="submit"
              // onClick={() => setLogin(false)}
            >
              Mendaftar
            </button>
          </div>
          <div className="w-full md:w-3/5 p-5">
            <div className="py-10">
              <h2 className="text-3xl font-bold text-black mb-2">
                MBC Porto
              </h2>
              <div className="border-2 w-10 border-black inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a
                  // onClick={signInWithFacebook}
                  className="border-2 border-gray-200 rounded-full p-3 mx-1 "
                >
                  <FaFacebookF className="text-sm text-black" />
                </a>
                <a 
                // onClick={signInWithGitHub}
                className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaGithub className="text-sm text-black" />
                </a>
                <a 
                // onClick={signInWithGoogle}
                className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaGoogle className="text-sm text-black" />
                </a>
              </div>
              <p className="text-gray-400 my-4 text-xs">
                atau gunakan akun email Anda
              </p>
              <div className="flex flex-col items-center mb-3">
                <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center">
                  <input
                    type="email"
                    name="email"
                    placeholder="contohtarmidi@gmail.com"
                    className="bg-gray-100 outline-none text-sm flex-1 text-black"
                    // {...register("email", { required: true })}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center mb-3 ">
                <div className="bg-gray-100 w-full md:w-64 p-2 flex items-center">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1 text-black"
                    // {...register("password", { required: true })}
                  />
                </div>
                <div className="flex justify-between w-full md:w-64 mb-10 ">
                  <label className="flex items-center text-xs text-black">
                    <input type="checkbox" name="remember" className="mr-1" />{" "}
                    Ingatkan saya!
                  </label>
                  <button className="text-xs text-black ">
                    Lupa Kata Sandi?
                  </button>
                </div>
                <button
                  className="border-2 text-black border-black rounded-full px-12 py-2 inline-block font-semibold hover:bg-black hover:text-white "
                  type="submit"
                  // onClick={() => setLogin(true)}
                >
                  Masuk
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
