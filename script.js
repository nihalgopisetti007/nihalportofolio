// 🎨 Stylized console banner
console.log(
  "%cWelcome to Nihal Gopisetti's Portfolio 👨‍💻",
  "color: #ff4e50; font-size: 20px; font-weight: bold; background: #f9d423; padding: 6px;"
);

// 📘 About Nihal
const nihalInfo = {
  name: "Nihal Gopisetti",
  university: "Anurag University",
  course: "B.Tech in Artificial Intelligence",
  email: "nihalg2837@gmail.com",
  phone: "+91 7620149671",
  message: "I build creative and technical projects!"
};

console.log("👤 Name:", nihalInfo.name);
console.log("🏫 University:", nihalInfo.university);
console.log("🎓 Course:", nihalInfo.course);
console.log("📧 Email:", nihalInfo.email);
console.log("📱 Phone:", nihalInfo.phone);
console.log("💬 Message:", nihalInfo.message);

// ✨ Optional: Alert the user (can remove if not needed)
window.addEventListener("load", () => {
  alert("Hey there! Welcome to Nihal Gopisetti's portfolio🚀");
});
