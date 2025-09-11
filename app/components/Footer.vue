<template>
    <footer class="footer">
        <div class="footer__container">

            <div>
                <p>Is there a project?</p>
                <p class="footer__lets-work">Let’s work together</p>
            </div>

            <ul class="footer__info">
                <li class="footer__info-li">
                    <p>For all questions</p>
                    <a>+7 (920) 278—00—68</a>
                    <a href="">qtim@agency.com</a>
                </li>
                
                <li class="footer__info-li">
                    <p>Office in Russia</p>
                    <address>139 Ruben Station Lake Drew, NM 52678</address>
                    <a href="https://t.me/s/qtim_pro">
                        <TgIcon/>
                    </a>
                </li>
                
                <li class="footer__info-li">
                    <p>Office in Dubai</p>
                    <address>139 Ruben Station Lake Drew, NM 52678</address>
                    <a href="https://t.me/s/qtim_pro">
                        <TgIcon/>
                    </a>
                </li>
            </ul>

            <div class="footer__bottom-panel bottom-panel">
            <div class="bottom-panel__links-container">
                <a href="/">Facebook</a>
                <a href="/">Instagram</a>
                <a href="/">Telegram</a>
            </div>

            <button class="bottom-panel__cta-btn">
                <p>Go</p>
            </button>
            

            <div class="bottom-panel__links-container">
                <a href="/">Behance</a>
                <a href="/">Linkedn</a>
                <a href="/">Privacy Policy</a>
            </div>
        </div>
        </div>
        
        

    </footer>
</template>

<style lang="scss" scoped>
    .footer{
        background-color: $pink-color;
        padding-top: 140px;
        height: 900px;
        overflow: hidden;

        &__lets-work{
            font-size: 112px;
            max-width: 464px;
            margin-top: 56px;
            text-decoration: underline;
            text-decoration-thickness: 3px;
            text-underline-offset: 10px;
        }

        &__container{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto auto;
            gap: 273px 0px;
            @include container;
        }

        &__info{
            max-width: 152px;
            display: grid;
            gap: 36px;
            margin: 75px 232px 0px auto;
        }

        &__info-li{
            list-style: none;

            p, a, address{
                line-height: 120%;
                display: block;
            }
            p{
                margin-bottom: 12px;
            }
            address{
                margin-bottom: 8px;
                font-style: normal;
            }
        }
    }

    .bottom-panel{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        grid-column: 1 / span 2;
        width: 100%;
        position: relative;

        &__links-container{
            display: flex;
            gap: 32px;

            a{
                border-bottom: 1px solid $black-color;
            }
        }

        &__cta-btn{
            height: 358px;
            width: 358px;
            background-color: $black-color;
            border-radius: 50%;
            color: $gray-1-color;
            border: none;
            position: absolute;
            left: 50%;
            top: -149px;
            transform: translateX(-50%);
            font-size: 32px;
            transition: transform 0.2s ease;
            
            &:hover{
                transform: translateX(-50%) scale(1.2);
            }

            p{
                margin-bottom: 30px;
            }
        }
    }
</style>