<template>
  <footer>
    <a href="https://github.com/mkurczewski" target="_blank">
      <img src="~/assets/img/gh-logo.svg" alt="See my GiHub" />
    </a>
    <a href="https://www.linkedin.com/in/mkurczewski/" target="_blank">
      <img src="~/assets/img/ln-logo.svg" alt="See my LinkedIn" />
    </a>
    <a href="https://stackoverflow.com/users/3763750" target="_blank">
      <img src="~/assets/img/so-logo.svg" alt="See my StackOverflow" />
    </a>
    <a tabindex="0">michal@kurczewski<span>.com</span>.dev</a>
    <a href="/Michał_Kurczewski_CV.pdf" target="_blank">cv</a>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style lang="scss" scoped>
footer {
  background: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;

  a {
    margin: 0.5rem;
    color: white;
    opacity: 0.7;
    letter-spacing: 0.05rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    transition: 0.15s ease-in-out;

    span {
      user-select: none;
      overflow: hidden;
      width: 0;
      display: inline-flex;
    }

    &:hover,
    &:focus {
      opacity: 1;
    }
  }

  input {
    appearance: none;
    border: none;
    background: transparent;
  }
}
</style>
