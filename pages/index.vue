<template>
  <main>
    <Project
      v-for="project in projects"
      :key="project.url"
      :project="project"
      :style="{ gridArea: project.name }"
    />
  </main>
</template>

<script lang="ts">
import Vue from "vue"
import Project, { ProjectProps } from "~/components/project/Project.vue"

export default Vue.extend({
  components: { Project },
  data() {
    const projects: ProjectProps[] = [
      {
        name: "duffle",
        description: " - app for online shopping at airports",
        url: "duffleapp.com",
        stack: ["React Native", "Typescript", "TanStack Query"],
      },
      {
        name: "wegeguru",
        url: "wegeguru.pl",
        stack: ["HTML 5", "SCSS", "JavaScript", "PHP", "Gulp", "WordPress"],
        darkMode: true,
      },
      {
        name: "lighthouse-canton",
        url: "lighthouse-canton.com",
        stack: ["HTML 5", "SCSS", "JavaScript", "PHP", "Gulp", "WordPress"],
      },
      {
        name: "sokbar",
        url: "sokbar.pl",
        stack: ["HTML 5", "SCSS", "JavaScript", "PHP", "Gulp", "WordPress"],
        darkMode: true,
      },
      {
        name: "znajdzzarzadce",
        url: "znajdzzarzadce.pl",
        stack: ["HTML 5", "SCSS", "JavaScript"],
      },
      {
        name: "mudita",
        url: "mudita.com",
        stack: [
          "HTML 5",
          "SCSS",
          "Typescript",
          "Gatsby",
          "Contentful",
          "GraphQL",
        ],
      },
      {
        name: "golden-estate",
        url: "golden-estate.pl",
        stack: ["HTML 5", "SCSS", "JavaScript", "Vue", "PHP", "Netlify"],
        darkMode: true,
      },
      {
        name: "jafrasalonkosmetyczny",
        url: "jafrasalonkosmetyczny.pl",
        stack: [
          "HTML 5",
          "SCSS",
          "JavaScript",
          "Nuxt",
          "Netlify",
          "Contentful",
        ],
      },
      {
        name: "kurczewski",
        url: "kurczewski.dev",
        stack: ["HTML 5", "SCSS", "TypeScript", "Nuxt", "Netlify"],
        darkMode: true,
      },
      {
        name: "mudita-center",
        description: "Mudita Center - App for managing Mudita Pure phone",
        stack: ["React", "Styled Components", "Electron", "Node", "Serialport"],
      },
    ]
    return {
      projects,
    }
  },
})
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-template-areas:
    "duffle"
    "mudita-center"
    "golden-estate"
    "jafrasalonkosmetyczny"
    "sokbar"
    "mudita"
    "wegeguru"
    "lighthouse-canton"
    "kurczewski"
    "znajdzzarzadce";

  @media all and (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "duffle golden-estate"
      "sokbar mudita-center"
      "jafrasalonkosmetyczny wegeguru"
      "kurczewski mudita"
      "znajdzzarzadce lighthouse-canton";
  }

  @media all and (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "duffle golden-estate jafrasalonkosmetyczny"
      "sokbar mudita-center wegeguru"
      "kurczewski lighthouse-canton mudita";
  }

  @media all and (min-width: 2600px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      "duffle golden-estate jafrasalonkosmetyczny sokbar lighthouse-canton"
      "mudita-center znajdzzarzadce wegeguru mudita kurczewski";
  }
}
</style>
