

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Learn Japanese the Fun Way!
          </h1>
          <p className="text-lg md:text-2xl mt-6">
            Master Japanese vocabulary, grammar, and culture with interactive
            tutorials.
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-pink-600 font-semibold rounded-md shadow-md hover:bg-yellow-100 transition">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Vocabulary Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Vocabulary Builder
          </h2>
          <p className="text-center mt-4 text-gray-600">
            Learn essential Japanese words and phrases with engaging flashcards.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-pink-50 rounded-lg shadow hover:shadow-lg text-center">
              <h3 className="text-xl font-semibold">Basic Words</h3>
              <p className="mt-4 text-gray-700">
                Master common greetings and everyday expressions.
              </p>
            </div>
            <div className="p-6 bg-yellow-50 rounded-lg shadow hover:shadow-lg text-center">
              <h3 className="text-xl font-semibold">Kanji Learning</h3>
              <p className="mt-4 text-gray-700">
                Break down complex Kanji characters with ease.
              </p>
            </div>
            <div className="p-6 bg-red-50 rounded-lg shadow hover:shadow-lg text-center">
              <h3 className="text-xl font-semibold">Verb Conjugation</h3>
              <p className="mt-4 text-gray-700">
                Learn how to use verbs in different contexts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Interactive Tutorials
          </h2>
          <p className="text-center mt-4 text-gray-600">
            Explore video lessons, quizzes, and activities tailored to your
            level.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-green-100 rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold">Beginner Level</h3>
              <p className="mt-4 text-gray-700">
                Start with Hiragana and Katakana basics.
              </p>
            </div>
            <div className="p-6 bg-blue-100 rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold">Intermediate Level</h3>
              <p className="mt-4 text-gray-700">
                Improve sentence structure and grammar.
              </p>
            </div>
            <div className="p-6 bg-purple-100 rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold">Advanced Level</h3>
              <p className="mt-4 text-gray-700">
                Perfect fluency with real-world conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Success Stories
          </h2>
          <p className="text-center mt-4 text-gray-600">
            Hear from our students who mastered Japanese with us!
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold">Emily S.</h3>
              <p className="mt-4 text-gray-700">
                "I went from zero to conversational in 3 months!"
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold">John D.</h3>
              <p className="mt-4 text-gray-700">
                "The Kanji lessons are a game-changer for me."
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold">Akira Y.</h3>
              <p className="mt-4 text-gray-700">
                "I passed my N2 proficiency test thanks to these tutorials."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Tips Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Japanese Culture Insights
          </h2>
          <p className="text-center mt-4 text-gray-600">
            Understand the culture to speak like a native.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold">Tea Ceremony</h3>
              <p className="mt-4 text-gray-700">
                Learn the art and etiquette of traditional Japanese tea
                ceremonies.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold">Seasonal Festivals</h3>
              <p className="mt-4 text-gray-700">
                Discover Japanese holidays and their unique celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
