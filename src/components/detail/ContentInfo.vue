<template>
  <div class="blog-content-info">
    <hr><br>
    <div class="title">The Blog Project</div>
    <br>
    <p class="subtitle">
      amplifies the voices of the open source community: the maintainers, developers,
      and teams whose contributions move the world forward everyday.
    </p>
    <br><br>
    <div class="wrapper">
      <div class="title">Share</div>
      <div class="share-items">
        <mdi-twitter class="share-icon twitter" />
        <mdi-facebook class="share-icon facebook" />
        <mdi-linkedin class="share-icon linkedin" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.blog-content-info {
  flex: 15%;
  padding-top: 0.6rem;

  .wrapper {
    position: sticky;
    top: calc(var(--appbar-height) + 30px);
  }

  .title {
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 0;
    width: fit-content;
    padding-bottom: 0.2rem;
    color: var(--text-light);
  }

  .subtitle {
    color: rgb(77 76 76);
  }

  .share-items {
    display: flex;

    .share-icon {
      font-size: 2rem;
      margin-block: 1rem;
    }

    .facebook {
      margin-inline: 1rem;
    }
  }

  @media only screen and (max-width: 768px) {
    flex: 100%;
  }
}

body[theme-dark] {
  .blog-content-info {
    .title {
      color: var(--text-dark);
    }

    .subtitle {
      color: rgb(144 144 144);
    }
  }
}
</style>
