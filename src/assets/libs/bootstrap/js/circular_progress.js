$(document).ready(function() {
    var $pc = $('#scoreController');
    var $pCaption = $('.score-bar p');
    var iProgress = document.getElementById('inactiveProgress');
    var aProgress = document.getElementById('activeProgress');
    if (iProgress == null) return;
    var iProgressCTX = iProgress.getContext('2d');


    drawInactive(iProgressCTX);

    $pc.on('change', function() {
        var percentage = $(this).val() / 100;
        drawProgress(aProgress, percentage, $pCaption);
    });

    function drawInactive(iProgressCTX) {
        iProgressCTX.lineCap = 'square';

        //outer ring
        //iProgressCTX.beginPath();
        //iProgressCTX.lineWidth = 15;
        //iProgressCTX.strokeStyle = '#e1e1e1';
        //iProgressCTX.arc(137.5,137.5,129,0,2*Math.PI);
        //iProgressCTX.stroke();

        //score bar
        iProgressCTX.beginPath();
        iProgressCTX.lineWidth = 0;
        iProgressCTX.fillStyle = '#e6e6e6';
        iProgressCTX.arc(137.5, 137.5, 121, 0, 2 * Math.PI);
        iProgressCTX.fill();

        //scorebar caption
        iProgressCTX.beginPath();
        iProgressCTX.lineWidth = 0;
        iProgressCTX.fillStyle = '#fff';
        iProgressCTX.arc(137.5, 137.5, 100, 0, 2 * Math.PI);
        iProgressCTX.fill();

    }

    function drawProgress(bar, percentage, $pCaption) {
        var barCTX = bar.getContext("2d");
        var quarterTurn = Math.PI / 2;
        var endingAngle = ((2 * percentage) * Math.PI) - quarterTurn;
        var startingAngle = 0 - quarterTurn;

        bar.width = bar.width;
        barCTX.lineCap = 'square';

        barCTX.beginPath();
        barCTX.lineWidth = 20;
        barCTX.strokeStyle = '#00B4FF';
        barCTX.arc(137.5, 137.5, 111, startingAngle, endingAngle);
        barCTX.stroke();


        barCTX.beginPath();
        barCTX.lineWidth = 20;
        barCTX.strokeStyle = '#f0ad4e';
        barCTX.arc(137.5, 137.5, 111, endingAngle, startingAngle);
        barCTX.stroke();

        //$pCaption.text( (parseInt(percentage * 1000, 10)));
        //$pCaption.text( 'F. S.');
    }

    var percentage = $pc.val() / 1000;
    drawProgress(aProgress, percentage, $pCaption);


});