const menuToggle=document.querySelector('.menuToggle');
const navigation=document.querySelector('.navigation');
menuToggle.onclick=function(){
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

window.addEventListener('scroll',function(){
  const header=this.document.querySelector('header');
  header.classList.toggle('sticky',this.window.scrollY>0)
})

// navigation menu close after clicked any link
function toggleMenu(){
  menuToggle.classList.remove('active');
  navigation.classList.remove('active');
}