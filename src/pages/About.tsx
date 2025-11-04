import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full text-center transition-transform transform hover:scale-[1.02]">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md border-4 border-blue-500"
        />
        <h1 className="text-3xl font-bold text-blue-700 mb-1">Montela Micselen Sumayouw</h1>
        <p className="text-gray-600 text-sm mb-1">NIM: 105022210024</p>
        <p className="text-gray-600 text-sm mb-4">Jurusan: Informatika</p>
        <h2 className="text-xl font-semibold text-blue-600 mb-2">About Me</h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          Saya adalah mahasiswa jurusan Informatika yang memiliki minat besar di
          bidang pengembangan web dan desain UI/UX. Saya senang belajar hal baru,
          terutama teknologi front-end seperti React, TailwindCSS, dan JavaScript.
          Tujuan saya adalah menciptakan aplikasi yang tidak hanya berfungsi
          dengan baik, tetapi juga memiliki tampilan yang menarik dan mudah
          digunakan.
        </p>
        <div className="mt-6 text-gray-500 text-sm italic">
          Regards, <span className="text-blue-700 font-medium">Regi Najoan</span>
        </div>
      </div>
    </div>
  );
};

export default About;
