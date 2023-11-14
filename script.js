
const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');


let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;




const itemWidth = 100 / totalItems;

// Add event listeners to previous and next buttons
prevBtn.addEventListener('click', () => {
  slideCarousel('prev');
});

nextBtn.addEventListener('click', () => {
  console.log("clicked");
  slideCarousel('next');
});

// Function to slide the carousel
function slideCarousel(direction) {
  
  const windowWidth = window.innerWidth;

  if (direction === 'next') {
    currentIndex++;
    if (windowWidth>=999 ? currentIndex >= totalItems-2 : currentIndex >= totalItems ) {
      currentIndex = 0;
    }
  } else if (direction === 'prev') {
    currentIndex--;
    if (currentIndex < 0) {
      windowWidth>=999 ? currentIndex = totalItems-3 : currentIndex=totalItems-1;
    }
  }

  const offset = -1 * currentIndex * itemWidth;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

//corparations 

function updateTextBasedOnWidth() {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 998 ) {
    // Update the text content
    document.querySelector(".corporation-texts p").innerHTML = "Businesses and corporations have a <span style='color: #FF0000;'>crucial role</span> to play in addressing climate change. They can <span style='color: #008000;text-decoration:underline;'>reduce their own greenhouse gas emissions</span> through sustainable practices, drive innovation in clean technologies, and set ambitious  <span style='font-weight: bold; color: #008000;'>sustainability goals.</span>";
  } else {
    // Update the text content to a different value for other window width
    //document.querySelector(".corporation-texts p").innerHTML = "Businesses and corporations have a crucial role to play in addressing climate change. They can reduce their own <span style='background-color: yellow;'>greenhouse gas emissions</span> through sustainable practices, drive <span style='background-color: #f8f9fa; padding: 2px 4px;'>innovation in clean technologies</span>, and set ambitious sustainability goals. By <span style='text-decoration: underline;'>collaborating and advocating for change</span>, businesses can influence policies and regulations to create a supportive environment for climate action. Investing in renewable energy, managing sustainable supply chains, and engaging stakeholders can further contribute to mitigating climate change and promoting a more sustainable future.";
    document.querySelector(".corporation-texts p").innerHTML = "Businesses and corporations have a <span style='color: #FF0000;'>crucial role</span> to play in addressing climate change. They can <span style='color: #008000;text-decoration:underline;'>reduce their own greenhouse gas emissions</span> through sustainable practices, drive innovation in clean technologies, and set ambitious sustainability goals. By collaborating and advocating for change, businesses can influence policies and regulations to create a <span style='color: #800080;'>supportive environment</span>  for climate action. Investing in renewable energy, managing sustainable supply chains, and engaging stakeholders can further contribute to mitigating climate change and promoting a more <span style='font-weight: bold; color: #008000;'>sustainable future</span>.";


// Additional styles can be added directly within the span tags

    
  
  }
}

// Call the function initially to set the text based on the initial window width
updateTextBasedOnWidth();

// Add an event listener to update the text whenever the window is resized
window.addEventListener("resize", updateTextBasedOnWidth);
