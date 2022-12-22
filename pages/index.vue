<template>
  <div>
    <head>

    </head>
    <main class="main-header">
      <div class="subsection">
        <h1 class="samrat-title">Hello World, My name is Samrat.</h1>
        <h2 class="experience-text">Incoming SWE Intern @ HubSpot | Bessemer Fellow Finalist | CS @ Georgia Tech</h2>
        <h5 class="description-text">I am a impact-driven software engineer with a focus building scaleable systems and applications. I love anything that has to do with blockchains, distributed systems, machine learning, web, 
          and mobile app development. I am currently a student at Georgia Tech, studying computer science but have worked at companies like Roboflow (YC S20) and Fidelity in the past. In my free time, I help direct Bits of Good,
        a social computing organization designed to help nonprofits get their app ideas made.</h5>
      </div>

      <div class="subsection">
        <h1 class="subheader">Some of my Favorite Technologies</h1>
        <div class="technologies-container">
          <Card subtitle="GoLang" imageSource="@/assets/images/typescript.png"/>
          <Card subtitle="Typescript" imageSource="@/assets/images/typescript.png"/>
          <Card subtitle="React.js" imageSource="@/assets/images/typescript.png"/>
          <Card subtitle="Vue.js" imageSource="@/assets/images/typescript.png"/>
          <Card subtitle="Next.js" imageSource="@/assets/images/typescript.png"/>
          <Card subtitle="Nuxt.js" imageSource="@/assets/images/typescript.png"/>
        </div>
      </div>
      <div class="subsection">

      <h1 class="subheader">Where I've Worked in the Past</h1>
</div>
    </main>

    <footer>

    </footer>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '@/components/Card.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Card
  }
})
</script>

<style>
.subsection{
  margin-top: 10px;
  max-width: 64rem;
}
body{
  background-color: #f5ecf9;
}
.samrat-title{
  font-size: 3.0rem;
  font-family: 'Outfit';
  font-weight: 600;
  margin: 0;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(60deg, #432371, #FAAE7B);
  background-clip: text;

}
.experience-text{
  font-size: 1.3rem;
  font-family: 'Outfit';
  font-weight: normal;
  margin: 0;
}

.description-text{
  font-size: 1.1rem;
  font-family: 'Outfit';
  font-weight: 300;
}
.main-header{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-top: 100px;
  padding-left: 16px;
  padding-right: 16px;
}

.subheader{
  font-size: 1.6rem;
  font-family: 'Outfit';
  font-weight: 500;
  color: #391e5f;
  text-align: center;


}
.technologies-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}
</style>
