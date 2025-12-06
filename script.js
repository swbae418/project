document.addEventListener('DOMContentLoaded', () => {
    console.log('LOVEPET 웹사이트가 로드되었습니다.');
});
// 1. 네비게이션 부드러운 스크롤링
    // 페이지 내 앵커 링크 클릭 시 부드럽게 이동 (#about, #services, #contact 등)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            // 'hero' 섹션의 버튼에서 사용된 scrollToSection 함수 호출 대신, 
            // 일반 앵커 링크는 네이티브 scrollIntoView를 사용합니다.
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    