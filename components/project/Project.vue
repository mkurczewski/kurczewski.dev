<template>
  <article>
    <figure>
      <picture>
        <source
          media="(max-width: 375px)"
          :srcset="`${getAsset('0.5')} 1x, ${getAsset('1')} 2x`"
        />
        <source
          media="(min-width: 376px)"
          :srcset="`${getAsset('1')} 1x, ${getAsset('2')} 2x`"
        />
        <source media="(min-width: 701px)" :srcset="`${getAsset('2')} 1x`" />
        <img
          ref="splash"
          class="splash"
          :src="require(`~/assets/img/${project.name}/splash@0.5x.jpg`)"
          alt=""
        />
      </picture>
      <figcaption ref="caption">
        <h1>
          <a
            v-if="project.url"
            :href="'https://' + project.url"
            target="_blank"
            tabindex="0"
          >
            <span>{{ project.url }}</span>
            <img
              src="~/assets/img/open.svg"
              alt="open this website in new tab"
            />
          </a>
          <span v-if="project.description">{{ project.description }}</span>
        </h1>
        <p><strong>Tech stack: </strong>{{ project.stack.join(", ") }}</p>
      </figcaption>
    </figure>
    <img
      :src="require(`~/assets/img/${project.name}/logo.svg`)"
      alt=""
      class="logo"
    />
    <div class="backdrop" :class="{ dark: Boolean(project.darkMode) }" />
  </article>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue"

type ImageSize = "0.5" | "1" | "2"

export interface ProjectProps {
  name: string
  url?: string
  description?: string
  stack: string[]
  darkMode?: boolean
}

export default Vue.extend({
  name: "Project",
  props: {
    project: {
      type: Object,
      required: true,
    } as PropOptions<ProjectProps>,
  },
  methods: {
    getAsset(size: ImageSize) {
      return require(`~/assets/img/${this.project.name}/splash@${size}x.jpg`)
    },
  },
})
</script>

<style lang="scss" scoped>
article {
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;

  &:hover,
  &:focus-within {
    figure {
      .splash {
        transform: scale3d(1, 1, 1);
      }
      figcaption {
        transform: translate3d(0, 0, 1px);
      }
    }
    .backdrop {
      opacity: 0;
    }
    .logo {
      transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
      opacity: 0;
    }
  }
}

.backdrop {
  position: relative;
  opacity: 1;
  top: 0;
  left: 0;
  width: 100%;
  padding-bottom: 60%;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9);
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;

  &.dark {
    background: rgba(0, 0, 0, 0.9);
  }
}

figure {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  top: 0;
  left: 0;
  z-index: 1;

  .splash {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 0;
    transform: scale3d(1.4, 1.4, 1.4);
    transition: transform 0.3s ease-in-out;
  }

  figcaption {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 1rem 1.5rem;
    box-sizing: border-box;
    transform: translate3d(0, 100%, 0);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.9);
    transition: transform 0.3s ease-in-out;

    a,
    span {
      color: white;
      font-weight: 700;
      font-size: 2rem;
      text-decoration: none;
      margin-top: 0;

      img {
        width: 2rem;
        margin: 0.1rem;
        vertical-align: bottom;
      }

      &:hover {
        span {
          text-decoration: underline;
        }
      }
    }

    p {
      color: white;
      font-size: 1.7rem;
      margin: 0.5rem 0;
      line-height: 1.5em;
    }

    strong {
      font-weight: 700;
    }
  }
}

.logo {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  height: 80%;
  transform: translate3d(-50%, -50%, 1px) scale3d(1, 1, 1);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
</style>
