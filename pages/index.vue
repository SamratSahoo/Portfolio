<template>
  <div>
    <PageHeader />
    <main class="main-header">
      <div class="subsection">
        <h1 class="samrat-title">Hello World, My name is Samrat.</h1>
        <h2 class="experience-text">
          Incoming SWE Intern @ HubSpot | Bessemer Fellow Finalist | CS @
          Georgia Tech
        </h2>
        <h5 class="description-text">
          I am an impact-driven software engineer with a focus building
          scaleable systems and applications. I love anything that has to do
          with blockchains, distributed systems, machine learning, web, and
          mobile app development. I am currently a student at Georgia Tech,
          studying computer science and have worked at companies like Roboflow
          (YC S20) and Fidelity in the past. In my free time, I help direct Bits
          of Good, a social computing organization designed to help nonprofits
          get their app ideas made.
        </h5>
      </div>

      <div class="subsection">
        <h1 class="subheader">Some of my Favorite Technologies</h1>
        <div class="technologies-container">
          <TechnologyCard subtitle="GoLang" image-source="images/go.png" />
          <TechnologyCard
            subtitle="Typescript"
            image-source="images/typescript.png"
          />
          <TechnologyCard
            subtitle="React.js"
            image-source="images/react.png"
            height="12rem"
            width="12rem"
          />
          <TechnologyCard subtitle="Vue.js" image-source="images/vue.png" />
          <TechnologyCard subtitle="Next.js" image-source="images/nextjs.svg" />
          <TechnologyCard subtitle="Nuxt.js" image-source="images/nuxtjs.png" />
        </div>
      </div>
      <div class="subsection">
        <h1 class="subheader">Where I've Worked in the Past</h1>
        <div class="career-container">
          <CareerCard
            image-source="images/roboflow.jpg"
            job-title="Software Engineering Intern"
            class="career-card"
            job-description="At Roboflow, I was part of the Machine Learning Infra team where I worked on state of the art machine learning infrastructure to empower clients abstract machine learning infra. During my time at Roboflow I worked on core product features like the Roboflow classiciation network as well as abstractions built on Roboflow like the Roboflow REST API and the Roboflow Python Package. (30,000 monthly downloads). On the side, I wrote case studies and created technical content that was read and used by thousands of people across the world."
          />
          <CareerCard
            image-source="images/fidelity.png"
            job-title="Software Engineering Intern"
            class="career-card"
            job-description="During my time at Fidelity, I worked on the digital servicing technologies team which is the team responsible for everything you see when you visit Fidelity.com. As part of the team I was responsible for creating more seamless developer experiences where I worked data mining tooling that enabled Fidelity developers to better leverage test data for their applications. I created a Vue.js based application that allowed for easier data creation and interaction. I also modernized legacy SOAP APIs by building a GraphQL abstraction layer to give developers easier access to these APIs."
          />
        </div>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TechnologyCard from '~/components/TechnologyCard.vue'
import CareerCard from '~/components/CareerCard.vue'
import PageHeader from '~/components/PageHeader.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    TechnologyCard,
    CareerCard,
    PageHeader,
  },
})
</script>

<style scoped>
.subsection {
  margin-bottom: 10px;
  max-width: 64rem;
  width: 100%;
}
.samrat-title {
  font-size: 3rem;
  font-family: 'Outfit';
  font-weight: 600;
  margin: 0;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(60deg, #432371, #faae7b);
  background-clip: text;
  text-align: center;
}
.experience-text {
  font-size: 1.3rem;
  font-family: 'Outfit';
  font-weight: normal;
  margin: 0;
  text-align: center;
}

.description-text {
  font-size: 1.1rem;
  font-family: 'Outfit';
  font-weight: 300;
}
.main-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-top: 50px;
  padding-left: 32px;
  padding-right: 32px;
}

.subheader {
  font-size: 1.6rem;
  font-family: 'Outfit';
  font-weight: 500;
  color: #391e5f;
  text-align: center;
  margin-bottom: 20px;
}
.technologies-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.career-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  grid-gap: 1rem;
}

.career-card {
  min-width: 12rem;
}
</style>
