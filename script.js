const studentForm = document.getElementById("studentForm");
const cardResult = document.getElementById("cardResult");
const formMessage = document.getElementById("formMessage");
const photoInput = document.getElementById("studentPhoto");
const photoPreview = document.getElementById("photoPreview");


let uploadedImageData = "";

// 1. Preview hoto kafin Generate
photoInput.addEventListener("change", function(){
  const file = this.files[0];
  if(file){
    if(!file.type.startsWith("image/")){
      formMessage.textContent = "Please select an image file!";
      return;
    }
    const reader = new FileReader();
    reader.onload = function(e){
      uploadedImageData = e.target.result;
      photoPreview.innerHTML = `<img src="${uploadedImageData}" alt="Preview">`;
      formMessage.textContent = "";
    }
    reader.readAsDataURL(file);
  }
});

// 2. Generate Card
studentForm.addEventListener("submit", function(e){
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const schoolName = document.getElementById("schoolName").value.trim();
  const course = document.getElementById("course").value.trim();

  if(!fullName || !schoolName || !course){
    formMessage.textContent = "Please fill all fields!";
    return;
  }
  if(!uploadedImageData){
    formMessage.textContent = "Please upload your photo!";
    return;
  }

  // STATIC NO - SC-2026
  const staticNo = "SC-2026";
  document.getElementById("cardStudentName").textContent = fullName;
  document.getElementById("cardSchoolName").textContent = schoolName;
  document.getElementById("cardCourse").textContent = course;
  document.getElementById("cardNumber").textContent = "Card No: " + staticNo;
  document.getElementById("cardPhoto").src = uploadedImageData;

  
  cardResult.hidden = false;
  formMessage.textContent = "";
  cardResult.scrollIntoView({behavior:"smooth"});
});

