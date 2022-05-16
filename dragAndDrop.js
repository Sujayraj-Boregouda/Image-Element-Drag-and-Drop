// Testing the Script File
console.log("Hello World");

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');


// Event Listeners for Draggable Element imgBox
imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been Triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0); // means it will queque at the end
});

imgBox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been Triggered');
    e.target.className = 'imgBox'; // adds class of imgbox otherwise due to hide class the image wont show
});

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault(); // without this we can't directly drop
        console.log('DragOver has been Triggered');
    });

    whiteBox.addEventListener('dragenter', (e) => {
        e.preventDefault();
        console.log('DragEnter has been Triggered');
        e.target.className += ' dashed'; // To add grey bg
    });

    whiteBox.addEventListener('dragleave', (e) => {
        e.preventDefault();
        console.log('DragLeave has been Triggered');
        e.target.className = 'whiteBox'; // To Remove Grey Bg
    });

    whiteBox.addEventListener('drop', (e) => {
        e.preventDefault();
        console.log('Drop has been Triggered');
        e.target.append(imgBox); // To Append the img element
    });
}



// Daily Learnings
// vs refresh
// link:css in header
// top, left works with position relative too
// set timout 0 means it will excute at last
// while append we dont need to use '' or " " we can directly write name