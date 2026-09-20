export const additionalBooks = [
  { Id: 1001, Title: "Atomic Habits", Author: "James Clear", price: 18.99, rating: 4.8, category: "Self-Development", coverImage: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg", description: "Tiny changes, remarkable results: a practical guide to building good habits." },
  { Id: 1002, Title: "The Psychology of Money", Author: "Morgan Housel", price: 17.49, rating: 4.7, category: "Business & Finance", coverImage: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg", description: "Timeless lessons on wealth, greed, and happiness." },
  { Id: 1003, Title: "Deep Work", Author: "Cal Newport", price: 16.99, rating: 4.6, category: "Productivity", coverImage: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg", description: "Rules for focused success in a distracted world." },
  { Id: 1004, Title: "Clean Code", Author: "Robert C. Martin", price: 31.99, rating: 4.7, category: "Programming & Technology", coverImage: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg", description: "A handbook of agile software craftsmanship." },
  { Id: 1005, Title: "The Pragmatic Programmer", Author: "David Thomas & Andrew Hunt", price: 34.99, rating: 4.8, category: "Programming & Technology", coverImage: "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg", description: "Your journey to mastery in modern software development." },
  { Id: 1006, Title: "The Alchemist", Author: "Paulo Coelho", price: 14.99, rating: 4.6, category: "Fiction", coverImage: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg", description: "A luminous fable about listening to your heart and following a dream." },
  { Id: 1007, Title: "Ikigai", Author: "Héctor García & Francesc Miralles", price: 15.99, rating: 4.5, category: "Self-Development", coverImage: "https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg", description: "Discover the Japanese secret to a long and happy life." },
  { Id: 1008, Title: "Think and Grow Rich", Author: "Napoleon Hill", price: 12.99, rating: 4.4, category: "Business & Finance", coverImage: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg", description: "A classic guide to achievement and purposeful thinking." },
  { Id: 1009, Title: "Sapiens", Author: "Yuval Noah Harari", price: 22.99, rating: 4.7, category: "Science", coverImage: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg", description: "A brief history of humankind, from ancient ancestors to the present." },
  { Id: 1010, Title: "The 7 Habits of Highly Effective People", Author: "Stephen R. Covey", price: 18.49, rating: 4.7, category: "Productivity", coverImage: "https://covers.openlibrary.org/b/isbn/9781982137274-L.jpg", description: "Powerful lessons in personal change and lasting effectiveness." },
  { Id: 1011, Title: "Thinking, Fast and Slow", Author: "Daniel Kahneman", price: 19.99, rating: 4.6, category: "Psychology", coverImage: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg", description: "An exploration of the two systems that shape our judgments." },
  { Id: 1012, Title: "Steve Jobs", Author: "Walter Isaacson", price: 21.99, rating: 4.6, category: "Biography", coverImage: "https://covers.openlibrary.org/b/isbn/9781451648539-L.jpg", description: "The acclaimed biography of a visionary innovator." },
  { Id: 1013, Title: "The Design of Everyday Things", Author: "Don Norman", price: 20.99, rating: 4.6, category: "Programming & Technology", coverImage: "https://covers.openlibrary.org/b/isbn/9780465050659-L.jpg", description: "A classic on human-centered design and usability." },
  { Id: 1014, Title: "Man's Search for Meaning", Author: "Viktor E. Frankl", price: 13.99, rating: 4.7, category: "Psychology", coverImage: "https://covers.openlibrary.org/b/isbn/9780807014295-L.jpg", description: "A moving account of finding purpose through life’s hardships." },
  { Id: 1015, Title: "The Martian", Author: "Andy Weir", price: 15.49, rating: 4.6, category: "Fiction", coverImage: "https://covers.openlibrary.org/b/isbn/9780553418026-L.jpg", description: "A clever astronaut fights to survive alone on Mars." },
  { Id: 1016, Title: "A Brief History of Time", Author: "Stephen Hawking", price: 16.49, rating: 4.5, category: "Science", coverImage: "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg", description: "A landmark introduction to the universe and its biggest questions." }
];

export const loadCatalog = async () => {
  try {
    const response = await fetch("https://www.jsonkeeper.com/b/SQID2");
    if (!response.ok) throw new Error("Catalog unavailable");
    const remote = await response.json();
    return [...remote, ...additionalBooks];
  } catch {
    return additionalBooks;
  }
};
