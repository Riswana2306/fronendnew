
const Eid = () => {
  return (
    <>
      <div className="bg-slate-50">

        <section className="mx-auto max-w-6xl px-5 py-12">

          <h1 className="text-center text-4xl font-bold text-slate-900">
            ⭐ Eid Day
          </h1>

          <p className="mt-4 text-center text-gray-600">
            Eid Mubarak! A beautiful day filled with happiness and family.
          </p>

          <div className="mt-10 grid items-center gap-8 md:grid-cols-2">

            <img
              src="./1.png"
              alt="Eid Day"
              className="mx-auto w-full max-w-sm h-auto rounded-2xl shadow-lg"
            />

            <div className="rounded-2xl bg-white p-6 shadow-lg">

              <h2 className="text-2xl font-bold">
                🌙 My Family Eid Day
              </h2>

              <div className="mt-5 space-y-4 text-gray-700">
                <p>🕒 At 3:30 AM, I woke up and got ready.</p>
                <p>🛁 At 4:00 AM, I took a bath.</p>
                <p>👗 At 6:00 AM, I wore my new Eid dress.</p>
                <p>🕌 At 7:30 AM, I went for Eid prayer.</p>
                <p>🏠 At 10:00 AM, I returned home.</p>
                <p>🍽️ At 11:00 AM, I had breakfast with my family.</p>
                <p>👨‍👩‍👧 At 12:00 PM, I spent time with my family.</p>
                <p>📸 At 2:00 PM, I took beautiful photos.</p>
                <p>🎉 At 4:00 PM, I enjoyed the Eid celebration.</p>
                <p>❤️ At 8:00 PM, I spent a happy evening with my family.</p>
              </div>

            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">

            <img
              src="./2.jpeg"
              alt="Eid Day"
              className="mx-auto w-full max-w-sm h-auto rounded-2xl shadow-lg"
            />

            <img
              src="./4.jpeg"
              alt="Eid Day"
              className="mx-auto w-full max-w-sm h-auto rounded-2xl shadow-lg"
            />

          </div>

          <div className="mt-10 space-y-6 text-center">

            <img
              src="./3.jpeg"
              alt="My First and Best Photo"
              className="mx-auto w-full max-w-sm h-auto rounded-2xl shadow-lg"
            />

            <h2 className="text-2xl font-bold text-pink-600">
              ❤️ My First & Best Photo
            </h2>

            <p className="mx-auto max-w-3xl text-gray-700 leading-7">
              After 23 years, we finally took this beautiful photo together.
              This is not just a picture, it is a precious memory filled
              with love, happiness and emotions. A moment that I will
              cherish forever. ❤️🥹
            </p>

            <img
              src="./k14.jpeg"
              alt="My Family Photo"
              className="mx-auto w-full max-w-sm h-auto rounded-2xl shadow-lg"
            />

            <h2 className="text-2xl font-bold text-pink-600">
              ❤️ My Family Memories
            </h2>

            <p className="mx-auto max-w-3xl text-gray-700 leading-7">
              A beautiful family memory filled with love, happiness and
              unforgettable moments. ❤️
            </p>

          </div>

          <div className="mt-10 flex justify-center">

            <video
              src="./eid.mp4"
              controls
              className="w-full max-w-lg rounded-2xl shadow-lg"
            />

          </div>

        </section>

      </div>
    </>
  );
};

export default Eid;
