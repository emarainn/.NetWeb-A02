$(function(){
    // preload audio
        //This will make it so there isnt as big of a delay, 
        //you can download the audio, make sure it is in the same folder
    var toast = new Audio('toast.wav');
    document.onkeydown = function(evt) {

        if(evt.keyCode == 27){
            $('#liveToast').toast('hide');
        }
    };
    $('.code').on('click', function(e) {
        e.preventDefault();
        $('#product').html($(this).data('name'));
        $('#code').html($(this).data('code'));

        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#liveToast').toast({ autohide: false }).toast('show');
    });
});
//before you need to define dataatributes before toast