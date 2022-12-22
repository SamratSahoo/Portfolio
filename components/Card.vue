<template>
    <div class="container" :style="cssVars">
        <img :src="imageSource"/>
        <h2 class="subtitle-text">{{ subtitle }}</h2>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Card',
    props: {
        imageSource: {
            type: String,
            default: "",
            required: false
        },
        subtitle: {
            type: String,
            default: "",
            required: false
        },
        width: {
            type: Number,
            default: 200,
            required: false
        },
        height: {
            type: Number,
            default: 200,
            required: false
        }

    },
    computed: {
        cssVars(){
            return {
                "--box-width": this.width + "px",
                "--box-height": this.height + "px"
            }
        }
    }
})
</script>

<style>

.container{
    display: flex;
    flex-direction: column;
    font-family: 'Outfit';
    font-weight: normal;
    border-radius: 10px;
    padding: 10px;
    background-color: white;
    text-align: center;
    width: var(--box-width);
    height: var(--box-height);
}

.subtitle-text{
    font-family: 'Outfit';
    font-weight: normal;
}

</style>