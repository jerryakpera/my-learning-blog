<template>
  <q-card class="blog-wrapper no-user" flat square>
    <div class="blog-content" :class="$q.screen.lt.md ? 'q-mb-xl' : ''">
      <div>
        <div
          class="q-my-md text-weight-bold"
          :class="$q.screen.lt.md ? 'text-subtitle1' : 'text-h6'"
        >
          {{ post.title }}
          <div class="text-secondary text-body2 text-weight-bold">
            <ProfileDialog :name="post.author.name" :slug="post.author.slug" />
          </div>
        </div>

        <p class="content-preview">{{ post.excerpt }}...</p>

        <q-btn
          :to="`/post/${post.slug}`"
          label="View Post"
          icon-right="las la-arrow-right"
          class="full-width"
          color="dark"
          text-color="white"
        />
      </div>
    </div>

    <div class="blog-photo">
      <q-img class="img" :src="post.featuredImage.url" alt="post photo" />
    </div>
  </q-card>
</template>

<script setup>
import ProfileDialog from "src/components/profile/ProfileDialog.vue";

const props = defineProps(["post", "welcomeScreen"]);
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

      p,
      .text-title {
        font-size: 15px;
        font-weight: 300;
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
  .blog-content {
    background-color: #303030;
    color: white;
  }
}
</style>
