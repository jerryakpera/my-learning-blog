<template>
  <q-card
    flat
    square
    class="blog-wrapper no-user"
    style="background-color: #d0e7dc"
  >
    <div
      class="blog-content text-black"
      :class="$q.screen.lt.md ? 'q-mb-xl' : ''"
    >
      <div :class="$q.screen.lt.md ? 'q-pa-lg' : ''">
        <div
          class="q-ma-none q-pa-none text-weight-bold"
          :class="
            $q.screen.lt.sm
              ? 'text-h5'
              : $q.screen.lt.md
              ? 'text-h4'
              : 'text-h3'
          "
        >
          {{ post.title }}
        </div>

        <p
          class="q-my-md text-weight-light"
          :class="
            $q.screen.lt.sm
              ? 'text-subtitle2'
              : $q.screen.lt.md
              ? 'text-subtitle1'
              : 'text-h6'
          "
        >
          {{ post.text }}
        </p>

        <q-btn to="#" label="Sign up Now" outline class="full-width" />
      </div>
    </div>

    <div class="blog-photo">
      <q-img class="img" :src="post.featuredImage.url" alt="post photo" />
    </div>
  </q-card>
</template>

<script setup>
import { useQuasar } from "quasar";

const props = defineProps(["post"]);

const $q = useQuasar();
</script>

<style lang="scss" scoped>
.blog-wrapper {
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    min-height: 550px;
    max-height: 550px;
    flex-direction: row;
  }

  .blog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;

    @media (min-width: 700px) {
      order: 1;
    }

    @media (min-width: 800px) {
      flex: 3;
    }

    div {
      max-width: 375px;

      @media (min-width: 700px) {
      }

      .text-h2 {
        font-weight: 300;

        @media (min-width: 700px) {
        }
      }

      .content-preview {
        font-size: 13px;
        max-height: 24;
        width: 250px;
        overflow: hidden;
      }

      .link {
        display: inline-flex;
        align-items: center;
        margin-top: 32px;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        transition: 0.5s ease-in all;

        &:hover {
          border-bottom-color: #303030;
        }
      }

      .link-light {
        &:hover {
          border-bottom-color: #fff;
        }
      }
    }
  }

  .blog-photo {
    order: 1;
    flex: 3;

    @media (min-width: 700px) {
      order: 2;
    }

    @media (min-width: 800px) {
      flex: 4;
    }

    .img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:nth-child(even) {
    .blog-content {
      order: 2;
    }

    .blog-photo {
      order: 1;
    }
  }
}

.no-user:first-child {
  // .blog-content {
  //   background-color: #303030;
  //   color: white;
  // }
}
</style>
