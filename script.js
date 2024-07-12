document.addEventListener('DOMContentLoaded', function() {
    const altitudeDisplay = document.getElementById('altitude');
    const measureBtn = document.getElementById('measureBtn');

    measureBtn.addEventListener('click', getAltitude);

    function getAltitude() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                if (position.coords.altitude !== null) {
                    altitudeDisplay.textContent = `고도: ${position.coords.altitude.toFixed(2)} 미터`;
                } else {
                    altitudeDisplay.textContent = '고도 정보를 사용할 수 없습니다.';
                }
            }, function(error) {
                altitudeDisplay.textContent = `오류: ${error.message}`;
            }, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
        } else {
            altitudeDisplay.textContent = '이 브라우저에서는 위치 정보를 지원하지 않습니다.';
        }
    }
});
