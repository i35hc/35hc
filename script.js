// Change only the values in this object to publish your actual profile links.
const profile = {
  name: "شامخ | 🇸🇦",
  image: "profile.jpg",
  bio: "صانع محتوى",
  platforms: [
    { label: "Discord", icon: "fa-brands fa-discord", color: "discord", url: "https://discord.gg/AZPRBVY" },
    { label: "Snapchat", icon: "fa-brands fa-snapchat", color: "snapchat", url: "https://www.snapchat.com/@i35hc" },
    { label: "Twitch", icon: "fa-brands fa-twitch", color: "twitch", url: "https://www.twitch.tv/asd44i" },
    { label: "Kick", icon: "fa-solid fa-k", color: "kick", url: "https://kick.com/asd44i" },
    { label: "Instagram", icon: "fa-brands fa-instagram", color: "instagram", url: "https://www.instagram.com/35hc" }
  ],
  support: {
    title: "ادعمني",
    subtitle: "دعم المحتوى والمشاريع القادمة",
    url: "https://creators.sa/asd44i"
  },
  store: {
    title: "متجر مود الشرطة",
    subtitle: "متجر مود الشرطة",
    url: "https://tampay.io/pay/0F74BCD9"
  }
};

document.title = profile.name;
document.getElementById("profile-name").textContent = profile.name;
document.getElementById("footer-name").textContent = profile.name;
document.getElementById("profile-bio").textContent = profile.bio;
document.getElementById("support-title").textContent = profile.support.title;
document.getElementById("support-subtitle").textContent = profile.support.subtitle;
document.getElementById("support-link").href = profile.support.url;
document.getElementById("store-title").textContent = profile.store.title;
document.getElementById("store-subtitle").textContent = profile.store.subtitle;
document.getElementById("store-link").href = profile.store.url;
document.getElementById("year").textContent = new Date().getFullYear();

const profileImage = document.getElementById("profile-image");
const backgroundPortrait = document.getElementById("background-portrait");
if (profile.image) {
  const showProfileImage = () => {
    profileImage.classList.add("is-loaded");
    profileImage.style.opacity = "1";
  };
  profileImage.addEventListener("load", showProfileImage);
  profileImage.src = profile.image;
  backgroundPortrait.src = profile.image;
  if (profileImage.complete) {
    showProfileImage();
  }
} else {
  profileImage.remove();
}

const socialLinks = document.getElementById("social-links");
profile.platforms.forEach((platform) => {
  const link = document.createElement("a");
  link.className = `platform-link ${platform.color}`;
  link.href = platform.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", platform.label);
  link.title = platform.label;
  link.innerHTML = `
    <i class="${platform.icon}" aria-hidden="true"></i>
    <span class="sr-only">${platform.label}</span>
  `;
  socialLinks.appendChild(link);
});