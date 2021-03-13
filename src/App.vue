<template>
  <div id="app">
    <div class="main">
      <div class="grid">
        <div class="main-grid grid-item">
          <window-view />
          <div class="select-grid">
            <div class="select-grid__inner">
              <div><span class="number">1</span></div>
              <app-select title-option="Не выбрано" v-model="form.selectedVariant" :options="variants" />
            </div>
            <div class="select-grid__inner">
              <div><span class="number">2</span></div>
              <app-select title-option="Не выбрано" v-model="form.selectedVariant2" :options="variants" />
            </div>
          </div>
          <div class="select-grid">
            <app-checkbox v-model="form.checkedNet" :option="mosquitoNet" />
          </div>
        </div>
        <div class="main-grid grid-item">
          <p class="grid-item__head">{{ showParameters }}</p>
          <div class="grid">
            <div class="grid-item">
              <app-input title="Ширина, мм" />
            </div>
            <div class="grid-item">
              <app-input title="Высота, мм" />
            </div>
          </div>
          <div class="select-grid">
            <app-select title="ПВХ-профиль" title-option="Не выбран" v-model="form.selectedPVH" :options="pvhProfile" />
          </div>
          <div class="select-grid">
            <app-select title="Стеклопакет" title-option="Не выбран" v-model="form.selectedWindow" :options="doubleGlazedWindow" />
          </div>
          <div class="select-grid">
            <app-select title="Цвет" title-option="Не выбран" v-model="form.selectedColor" :options="colors" />
          </div>
          <div class="price">
            <p class="price__text">Цена* - от <span class="price__num">{{ getTotalPrice() }}</span></p>
          </div>
          <div class="add-to-cart">
            <a>{{ addToCart }}</a>
          </div>
        </div>
      </div>
      <div class="about">
        <p v-for="(item, key) in rules" :key="key">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import windowView from "@/components/windowView";
import AppInput from "@/components/AppInput";
import AppSelect from "@/components/AppSelect";
import AppCheckbox from "@/components/AppCheckbox";

export default {
  name: 'App',
  components: {
    windowView,
    AppInput,
    AppSelect,
    AppCheckbox
  },
  data() {
    return {
      form : {
        selectedVariant: '',
        selectedVariant2: '',
        selectedPVH: '',
        selectedWindow: '',
        selectedColor: '',
        checkedNet: ''
      },
      showParameters: 'Укажите параметры',
      addToCart: 'Добавить в корзину',
      rules: [
          '* Цены в настоящем калькуляторе указана ориентировочная стоимость конструкций. Точный расчёт может быть проведен только с участием нашего инженера-замерщика.',
          '* Цены на учитывают текущие скидки и акции. Звоните для полного расчёта в наш колл-центр!'
      ],
      mosquitoNet: {
        name: 'добавить москитную сетку',
        price: 1000
      },
      totalPrice: 0,
      pvhProfile: [
        {
          name: 'ECO 60',
          price: 20000
        },
        {
          name: 'Баутек НЕО',
          price: 25000
        },
        {
          name: 'Спейс',
          price: 30000
        },
        {
          name: 'Эфорте',
          price: 35000
        }
      ],
      doubleGlazedWindow: [
        {
          name: 'Двухкамерный стеклопакет',
          price: 500
        },
        {
          name: 'Однокамерный энергесберегающий стеклопакет',
          price: 600
        },
        {
          name: 'Однокамерный стеклопакет с использованием триплекса',
          price: 700
        },
        {
          name: 'Антирезонансный шумозащитный стеклопакет',
          price: 1000
        },
        {
          name: 'Двухкамерный энергосберегающий стеклопакет',
          price: 1200
        }
      ],
      colors: [
        {
          name: 'Белый',
          price: 500
        },
        {
          name: 'Коричневый',
          price: 500
        },
        {
          name: 'Черный',
          price: 500
        }
      ],
      variants: [
        {
          name: 'Поворотное',
          price: 500
        },
        {
          name: 'Глухое',
          price: 600
        },
        {
          name: 'Откидное',
          price: 700
        },
        {
          name: 'Поворотно-откидное',
          price: 1000
        }
      ]
    }
  },
  methods: {
    getTotalPrice() {
      return Object.keys(this.form).reduce((sum,key)=>sum+parseFloat(this.form[key]||0),0);
    }
  }
}
</script>

<style lang="sass">
  @font-face
    font-family: "Roboto-Regular"
    src: url("./assets/fonts/Roboto/Roboto-Regular.ttf") format('truetype'),
    url("./assets/fonts/Roboto/Roboto-Regular.woff") format('woff')

  $body-color: #fff
  $grid-color: #f3f3f3
  $orange-color: #fe5c26

  *
    margin: 0
    padding: 0
    box-sizing: border-box

  body
    font-family: "Roboto-Regular", sans-serif
    background-color: $body-color

  .main
    margin: 100px auto
    width: 900px
    background: $grid-color
    padding: 50px 96px 50px 60px
    .main-grid
      &:last-child
        padding-left: 50px
  .grid
    display: flex
    flex-wrap: wrap
    .grid-item
      width: 50%
      &__head
        font-size: 20px
        line-height: 24px
        color: $orange-color
        font-weight: 700
        margin-bottom: 20px
  .select-grid
    margin-top: 20px
    &__inner
      display: flex
      align-items: center
      width: 100%
      margin-top: 20px
      div:first-child
        background: #e6e6e6
        border-radius: 50%
        height: 40px
        width: 40px
        position: relative
        margin-right: 10px
        span.number
          color: $body-color
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%, -50%)
          font-size: 31px
          font-weight: 700
  .price
    margin-top: 20px
    &__text
      font-size: 14px
      color: #000
      font-weight: 400
      margin: 0
    &__num
      margin-left: 10px
      font-size: 30px
      font-weight: 700
      color: $orange-color
  .add-to-cart
    margin-top: 20px
    a
      border: 1px solid $orange-color
      padding: 10px 20px
      color: $orange-color
      font-size: 15px
      font-weight: 700
      text-transform: uppercase
  .about
    margin-top: 50px
    p
      color: #707070
      font-size: 13px
      line-height: 18px
      font-weight: 400

  @media only screen and (max-width: 700px)
    .main
      width: 350px
      padding: 20px
      margin-top: 50px
      .main-grid:last-child
        padding-left: 0
    .grid
      .grid-item
        width: 100%
        &__head
          margin-top: 30px
</style>
