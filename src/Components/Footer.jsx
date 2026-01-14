import React from 'react';

const Footer = () => {
    return (
        <div className='w-fit h-[40vh] md:h-auto relative overflow-hidden text-["Inter"]'>
            <img class="h-full w-screen md:h-auto md:max-h-[500px]" src="../src/Images/footer-background.png" alt="" />
            <div class="w-full flex flex-col items-center absolute top-0 -translate-y-0 gap-10 text-center">
                <div class="w-9/10 mx-auto flex flex-col items-center gap-4 md:gap-8 text-center">
                    <h2 class="font-bold text-white text-[32px] lg:text-[55px] tracking-[5%]">Join Us</h2>
                    <p class="max-w-9/10 lg:w-[420px] text-[20px] lg:text-[28px] text-white leading-[28px]">Interested in joining the club? Reach out to us!</p>
                </div>
                <div className='flex gap-8.5'>
                    <a href="https://discord.com/invite/99etMZudD4?fbclid=PAZXh0bgNhZW0CMTEAAacpQ12TC4q8kWpgEDLwy-zKrpdjZahCrqVQijSf43omnacZZNhFvtCZ0ULJEA_aem_jBASs2Au-Sikf6Uir5YUBg">
                        <img src="../src/Images/discord-brands-solid-full.svg" alt="Join our discord" class='w-[36px] h-[36px] lg:w-[50px] lg:h-[50px]' />
                    </a>
                    <a href="https://www.instagram.com/umdhksa/">
                        <img src="../src/Images/instagram-brands-solid-full.svg" alt="Check out the UMD HKSA Instagram" class='w-[36px] h-[36px] lg:w-[50px] lg:h-[50px]' />
                    </a>
                    <a href="https://linktr.ee/umdhksa?fbclid=PAZXh0bgNhZW0CMTEAAadLBJT6wvhTTsA8Gu0bO3eHhSmATS6nzTBWqanZA-8jxPWe2JNVrIsNgBXBMA_aem_YmEHeAcJEC_kVUKTJ_p3qAa%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAadLBJT6wvhTTsA8Gu0bO3eHhSmATS6nzTBWqanZA-8jxPWe2JNVrIsNgBXBMA_aem_YmEHeAcJEC_kVUKTJ_p3qA&e=AT1AG8dvv38uSgVPbXiX1DIF4jqyfToAan8XCPhzTi0GRuJKGwosX1GswiLOzBVFYAaGiZPEqPvrcPJhgdSLTXJ2K9nG2qgK-OmRGss">
                        <img src="../src/Images/linktree-brands-solid-full.svg" alt="Visit our Linktree" class='w-[36px] h-[36px] lg:w-[50px] lg:h-[50px]' />
                    </a>
                </div>
            </div>
            <p class="text-[#AFAFAF] text-xs md:text-[22px] absolute bottom-5 right-12">@ 2025 Campus Coders Crew</p>
        </div>
    );
}

export default Footer;