<template>
  <div class="content-container">
    <h1>📝 정보처리기사 실기</h1>

    <div class="wrap">
      <v-row no-gutters align="center" justify="space-between">
        <v-chip-group class="py-1" column>
          <v-chip
            outlined
            :color="
              chapter === 0 && !showMarked && !showRandom ? 'primary' : ''
            "
            @click="(chapter = 0), (showMarked = false), (showRandom = false)"
            >전체</v-chip
          >
          <v-chip
            outlined
            :color="chapter === 0 && showMarked && !showRandom ? 'primary' : ''"
            @click="(chapter = 0), (showMarked = true)"
            >선택</v-chip
          >
          <v-chip
            v-for="(items, idx) in data"
            :key="idx"
            outlined
            :color="items.chapter === chapter && !showRandom ? 'primary' : ''"
            class="mr-2"
            @click="chapter = items.chapter"
            >{{ items.chapter }}장
          </v-chip>

          <v-chip
            outlined
            :color="showRandom ? 'primary' : ''"
            @click="
              (showRandom = true), (randomItems = getRandomItems(items, 10))
            "
            >랜덤</v-chip
          >
        </v-chip-group>

        <div>
          <span style="font-size: 0.8rem"
            >총 <strong>{{ count }}</strong> 개</span
          >
          <v-btn icon @click="refresh">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </div>
      </v-row>

      <template v-if="!showRandom">
        <div
          v-for="(items, idx) in data.filter(
            e => e.chapter === chapter || chapter === 0
          )"
          :key="idx">
          <template v-if="items.items.length > 0">
            <v-row
              no-gutters
              class="pt-5 pb-4"
              align="center"
              justify="space-between">
              <span>
                <strong>
                  {{ items.chapter + ". " + items.title }}
                </strong>
                <v-btn icon small @click="shuffleOrder(items.chapter)"
                  ><v-icon small>mdi-clipboard-edit-outline</v-icon></v-btn
                >
              </span>

              <span style="font-size: 0.8rem">
                <strong>{{
                  showMarked
                    ? items.items.filter(e => e.mark).length
                    : items.items.length
                }}</strong>
                개</span
              >
            </v-row>

            <v-row
              no-gutters
              v-for="(item, subIdx) in items.items"
              :key="subIdx"
              :class="!showMarked || item.mark ? 'my-1' : ''"
              align="center"
              justify="center">
              <template v-if="!showMarked || item.mark">
                <v-col>
                  <v-row no-gutters style="flex-wrap: nowrap">
                    <v-chip
                      @click="toggleMark(item)"
                      :color="item.mark ? 'pink' : ''"
                      :outlined="!item.mark"
                      style="
                        justify-content: center;
                        min-width: 24px !important;
                        max-width: 24px !important;
                        height: 24px;
                        aspect-ratio: 1;
                        border-radius: 100%;
                        font-size: 0.7rem;
                        padding: 0;
                      "
                      class="mr-2"
                      :style="{ color: item.mark ? 'white' : '' }"
                      >{{ subIdx + 1 }}</v-chip
                    >
                    <span
                      style="font-size: 0.9rem; padding-top: 1px"
                      class="my-auto">
                      {{ item.question }}
                    </span>
                  </v-row>
                </v-col>

                <v-col cols="3" align="end" justify="center">
                  <template v-if="item.show">
                    <v-row
                      no-gutters
                      align="center"
                      justify="end"
                      style="min-height: 36px">
                      <strong
                        style="font-size: 0.75rem; word-break: break-word"
                        @click="toggleAnswer(item)">
                        {{ item.answer }}
                      </strong>

                      <v-btn
                        :elevation="0"
                        @click="toggleAnswer(item)"
                        icon
                        small>
                        <v-icon small color="red">mdi-close</v-icon>
                      </v-btn>
                    </v-row>
                  </template>
                  <template v-else>
                    <v-btn :elevation="0" @click="toggleAnswer(item)">
                      <v-icon small left color="green">mdi-check</v-icon>
                      <span style="font-size: 0.8rem">정답</span>
                    </v-btn>
                  </template>
                </v-col>
                <v-col cols="12">
                  <v-divider class="mt-1" style="opacity: 0.5" />
                </v-col>
              </template>
            </v-row>
          </template>
        </div>
      </template>

      <template v-else>
        <div>
          <v-row
            no-gutters
            class="pt-5 pb-4"
            align="center"
            justify="space-between">
          </v-row>
          <v-row
            no-gutters
            v-for="(item, idx) in randomItems"
            :key="idx"
            class="my-1"
            align="center"
            justify="center">
            <template>
              <v-col>
                <v-row no-gutters style="flex-wrap: nowrap">
                  <v-chip
                    outlined
                    style="
                      justify-content: center;
                      min-width: 24px !important;
                      max-width: 24px !important;
                      height: 24px;
                      aspect-ratio: 1;
                      border-radius: 100%;
                      font-size: 0.7rem;
                      padding: 0;
                    "
                    class="mr-2"
                    >{{ idx + 1 }}</v-chip
                  >
                  <span
                    style="font-size: 0.9rem; padding-top: 1px"
                    class="my-auto">
                    {{ item.question }}
                  </span>
                </v-row>
              </v-col>

              <v-col cols="3" align="end" justify="center">
                <template v-if="item.show">
                  <v-row
                    no-gutters
                    align="center"
                    justify="end"
                    style="min-height: 36px">
                    <strong
                      style="font-size: 0.75rem; word-break: break-word"
                      @click="toggleAnswer(item)">
                      {{ item.answer }}
                    </strong>

                    <v-btn
                      :elevation="0"
                      @click="toggleAnswer(item)"
                      icon
                      small>
                      <v-icon small color="red">mdi-close</v-icon>
                    </v-btn>
                  </v-row>
                </template>
                <template v-else>
                  <v-btn :elevation="0" @click="toggleAnswer(item)">
                    <v-icon small left color="green">mdi-check</v-icon>
                    <span style="font-size: 0.8rem">정답</span>
                  </v-btn>
                </template>
              </v-col>
              <v-col cols="12">
                <v-divider class="mt-1" style="opacity: 0.5" />
              </v-col>
            </template>
          </v-row>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import data from "@/data/data.js";
export default {
  name: "IndexPage",
  components: {},
  data() {
    return {
      data: data,
      count: 0,
      chapter: 0,
      showMarked: false,
      showRandom: false,
      randomItems: [],
      items: [],
    };
  },
  watch: {
    showMarked() {
      if (this.showMarked) {
        this.showRandom = false;
        this.count = 0;
        this.data.forEach(chapter => {
          chapter.items.forEach(item => {
            if (item.mark) {
              this.count++;
            }
          });
        });
      } else {
        this.count = 0;
        this.data.forEach(chapter => {
          this.count += chapter.items.length;
        });
      }
    },

    chapter() {
      this.count = 0;
      if (this.chapter > 0) {
        this.showMarked = false;
        this.showRandom = false;
        this.count += this.data[this.chapter - 1].items.length;
      } else {
        this.data.forEach(chapter => {
          this.count += chapter.items.length;
        });
      }
    },

    showRandom() {
      if (this.showRandom) {
        this.showMarked = false;
      }
    },
  },

  mounted() {
    this.count = 0;
    this.items = [];
    this.data.forEach(chapter => {
      this.count += chapter.items.length;
      this.items.push(...chapter.items);
    });
  },

  methods: {
    toggleAnswer(item) {
      this.$set(item, "show", !item.show);
    },

    toggleMark(item) {
      this.$set(item, "mark", !item.mark);
    },

    refresh() {
      this.data.forEach(chapter => {
        chapter.items.forEach(item => {
          item.show = false;
        });
      });
    },

    getRandomItems(array, count) {
      const result = [];
      const length = array.length;

      if (length <= count) {
        return array;
      }

      while (result.length < count) {
        const randomIndex = Math.floor(Math.random() * length);
        const randomItem = array[randomIndex];
        array.splice(randomIndex, 1);
        result.push(randomItem);
      }
      return result;
    },

    shuffleOrder(chapter) {
      this.data.forEach(content => {
        if (content.chapter === chapter) {
          if (content.items.length > 0) {
            content.items.sort(() => Math.random() - 0.5);
          }
        }
      });
    },
  },
};
</script>

<style lang="scss">
.content-container {
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;

  .wrap {
    margin: 20px 10px;
  }
}
</style>
