<template>
    <header class="header">
        <NuxtLink to="/" class="header__logo">
            <LogoIcon/>
        </NuxtLink>
        

        <nav class="header__nav">
            <NuxtLink class="header__nav-link" to="/">Works</NuxtLink>
            <NuxtLink class="header__nav-link" to="/">About</NuxtLink>
        </nav>

        <button class="header__lang-btn" aria-label="Switch language">
            <EnLangIcon/>
        </button>

        <button class="header__cta-btn">Let’s work</button>
    </header>
</template>

<style lang="scss" scoped>
    .header{
        background: $white-color;
        position: sticky;
        top: 0;
        z-index: 100;
        font-size: 20px;
        width: 100%;
        padding-inline: 40px;
        height: 121px;
        display: flex;
        align-items: center;

        @media(max-width: 1216px){
            padding-inline: 20px;
        }

        &__logo{
            margin-right: auto;
        }

        &__nav{
            margin-right: 91px;
            display: flex;
            gap: 58px;
        }

        &__lang-btn{
            padding: 12px;
            display: flex;
            background: none;
            border-radius: 50%;
            border: 2px #0000001A solid;
            margin-right: 16px;
        }
        &__cta-btn{
            padding: 16px 32px;
            background-color: $black-color;
            color: $white-color;
            border-radius: 999px;
            border: none;
            font-size: 20px;
        }
    }
</style>