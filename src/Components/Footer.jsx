import React from 'react';

const Footer = () => {
    return (
        <div className='w-full h-auto relative'>
            <img src="../src/Images/footer-background.png" alt="" />
            <div class="w-full flex flex-col items-center absolute top-1/2 -translate-y-1/2 gap-8 text-center">
                <div class="w-full flex flex-col items-center gap-2 text-center">
                    <h2 class="text-white text-[56px] tracking-[5%]" style={{ fontFamily: 'Tiro Bangla, serif' }}>Join Us</h2>
                    <p class="w-[420px] text-[28px] text-white leading-[28px]"  style={{ fontFamily: 'ZCOOL XiaoWei, sans-serif' }}>Interested in joining the club? Reach out to us!</p>
                </div>
                <div className='flex gap-8.5'>
                    <a href="https://discord.com/invite/99etMZudD4?fbclid=PAZXh0bgNhZW0CMTEAAacpQ12TC4q8kWpgEDLwy-zKrpdjZahCrqVQijSf43omnacZZNhFvtCZ0ULJEA_aem_jBASs2Au-Sikf6Uir5YUBg">
                        <img src="../src/Images/discord-brands-solid-full.svg" alt="Join our discord" width="50" height="50" />
                    </a>
                    <a href="https://www.instagram.com/umdhksa/">
                        <img src="../src/Images/instagram-brands-solid-full.svg" alt="Check out the UMD HKSA Instagram" width="50" height="50" />
                    </a>
                    <a href="https://linktr.ee/umdhksa?fbclid=PAZXh0bgNhZW0CMTEAAadLBJT6wvhTTsA8Gu0bO3eHhSmATS6nzTBWqanZA-8jxPWe2JNVrIsNgBXBMA_aem_YmEHeAcJEC_kVUKTJ_p3qAa%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAadLBJT6wvhTTsA8Gu0bO3eHhSmATS6nzTBWqanZA-8jxPWe2JNVrIsNgBXBMA_aem_YmEHeAcJEC_kVUKTJ_p3qA&e=AT1AG8dvv38uSgVPbXiX1DIF4jqyfToAan8XCPhzTi0GRuJKGwosX1GswiLOzBVFYAaGiZPEqPvrcPJhgdSLTXJ2K9nG2qgK-OmRGss">
                        <img src="../src/Images/linktree-brands-solid-full.svg" alt="Visit our Linktree" width="50" height="50" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;