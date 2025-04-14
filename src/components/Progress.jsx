import React from 'react'
const Progress = () => {
    window.onscroll = function () {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
      };
  return (
    <div id="progressBar" className='fixed z-999 bg-[white] h-[6px] rounded-md'></div>
  )
}

export default Progress
