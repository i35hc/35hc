// Change only the values in this object to publish your actual profile links.
const profile = {
  name: "شامخ بن عذال",
  image: "profile.jpg",
  support: {
    title: "ادعمني",
    url: "https://creators.sa/asd44i"
  }
};

document.title = profile.name;
document.getElementById("profile-name").textContent = profile.name;
document.getElementById("footer-name").textContent = profile.name;
document.getElementById("support-title").textContent = profile.support.title;
document.getElementById("support-link").href = profile.support.url;
document.getElementById("year").textContent = new Date().getFullYear();

const profileImage = document.getElementById("profile-image");
if (profile.image) {
  const showProfileImage = () => {
    profileImage.classList.add("is-loaded");
    profileImage.style.opacity = "1";
  };
  profileImage.addEventListener("load", showProfileImage);
  profileImage.src = profile.image;
  if (profileImage.complete) {
    showProfileImage();
  }
} else {
  profileImage.remove();
}