$(document).ready(() => {

    for (i=0; i<50; i+=1){
        var Photo = "<img src='img/Gijs.png' alt='Image "+i+"' class='black-and-white rotate' style='opacity: "+(100-i)/100+"; width: 80%'>"
        $('.image-grid').append(Photo).hide().fadeIn(500)   
    }

    var rotationInterval;

    $('.image-grid img').hover(
      function() {
        var currentRotation = $(this).data('rotation') || 0;

        // Start a rotating interval every 0.01 seconds
        rotationInterval = setInterval(function() {
          currentRotation += 12;
          $(this).css('transform', 'rotate(' + currentRotation + 'deg)');
          $(this).data('rotation', currentRotation);
        }.bind(this), 10);
      },
      function() {
        // Clear the rotating interval on hover-out
        clearInterval(rotationInterval);
      }
    );


    
    var rotationIntervals = [];

    // Function to start rotating all images with different intervals and speeds
    function startRandomRotations() {
      $('.image-grid img').each(function() {
        var rotationInterval = setInterval(function() {
          var currentRotation = $(this).data('rotation') || 0;
          var randomSpeed = Math.random() * 10 + 1; // Random speed between 1 and 10
          currentRotation += randomSpeed;
          $(this).css('transform', 'rotate(' + currentRotation + 'deg)');
          $(this).data('rotation', currentRotation);
        }.bind(this), Math.random() + 10); // Random interval between 500ms and 1500ms

        rotationIntervals.push(rotationInterval);
      });
    }

    // Click event to start/stop random rotations
    $(document).on('click', function() {
      if (rotationIntervals.length > 0) {
        // If rotations are already active, stop them
        rotationIntervals.forEach(function(interval) {
          clearInterval(interval);
        });
        rotationIntervals = [];
      } else {
        // If rotations are not active, start them
        startRandomRotations();
      }
    });

});