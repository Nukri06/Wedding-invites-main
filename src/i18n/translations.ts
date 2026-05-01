export type Lang = "ka" | "en";

export const translations = {
  ka: {
    nav: { home: "მთავარი", schedule: "დღის წესრიგი", venue: "ადგილი", gallery: "გალერეა" },
    hero: {
      kicker: "ქორწილინების მოსაწვევი",
      and: "და",
      saveTheDate: "გეპატიჟებით ჩვენი სიყვარულის ზეიმზე",
    },
    countdown: {
      title: "ჩვენს დიდ დღემდე დარჩა",
      days: "დღე",
      hours: "საათი",
      minutes: "წუთი",
      seconds: "წამი",
      quote:
        "„ორი სული, ერთი ბედი , ჩვენი ისტორია იწყება“",
    },
    schedule: {
      title: "დღის წესრიგი",
      subtitle: "ღონისძიების მიმდინარეობა",
    },
    venue: {
      title: "ადგილმდებარეობა",
      subtitle: "სად შევხვდებით",
      directions: "მარშრუტის გაგება",
    },
    gallery: {
      title: "ჩვენი მომენტები",
      subtitle: "სიყვარულის ფრაგმენტები",
    },
    story: {
      kicker: "ჩვენი ისტორია",
      title: "სიყვარულით დაწყებული",
      body:
        "იმ დღეს, როცა ერთმანეთს შევხვდით, ჯერ არ ვიცოდით, რომ ეს იყო ჩვენი სიყვარულის დასაწყისი... გადაიკვეთა ამ დღეს ჩვენი ცხოვრების გზები, დღეს კი გეპატიჟებით მისი გაგრძელების აღსანიშნავად",
      signature: "სიყვარულით იზოლდა და გოჩა",
    },
    quote: {
      text: "„სადაც სიყვარულია, იქ სიცოცხლეა“",
      author: "— მაჰათმა განდი",
    },
    rsvp: {
      kicker: "სამახსოვროდ",
      title: "შემოგვიერთდი ამ დღეს",
      body: "თქვენი მონაწილეობა ჩვენი ბედნიერების შემადგენელი ნაწილია.",
    },
    footer: {
      withLove: "სიყვარულით",
      seeYou: "გელოდებით",
    },
  },
  en: {
    nav: { home: "Home", schedule: "Schedule", venue: "Venue", gallery: "Gallery" },
    hero: {
      kicker: "The Wedding Invitation",
      and: "and",
      saveTheDate: "You're invited to celebrate our love",
    },
    countdown: {
      title: "Counting down to our big day",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      quote: "“Two souls, one destiny — our story begins”",
    },
    schedule: {
      title: "Order of the Day",
      subtitle: "How the celebration unfolds",
    },
    venue: {
      title: "Location",
      subtitle: "Where we'll meet",
      directions: "Get Directions",
    },
    gallery: {
      title: "Our Moments",
      subtitle: "Fragments of love",
    },
    story: {
      kicker: "Our Story",
      title: "Written in Love",
      body:
        "The day we met, we had no idea it was the beginning of our love story... Our paths crossed that day, and today we invite you to celebrate its continuation",
      signature: "With love, Izolda & Gocha",
    },
    quote: {
      text: "“Where there is love, there is life.”",
      author: "— Mahatma Gandhi",
    },
    rsvp: {
      kicker: "Save the date",
      title: "Be part of our day",
      body: "Your presence is the gift that completes our happiness.",
    },
    footer: {
      withLove: "With love",
      seeYou: "See you there",
    },
  },
} as const;