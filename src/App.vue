<script setup>
import Tabs from "./components/Tabs.vue";
import BreadCrumbs from "./components/Breadcrumbs.vue";
import SmallSwitcher from "./components/SmallSwitcher.vue"
import Card from "./components/Card.vue"
import CardCollection from "./components/CardsCollection.vue"
import Input from "./components/Input.vue"
import axios from 'axios';

import Vector from './assets/Vector.svg'
import Pinlight from './assets/Pin-light.svg'

import { mock } from './components/mock/cards-collection-mock'

</script>

<template>
	<div>

		<header class="root">
			<img class="logo" src="./assets/Klerk.svg" alt="logo">
			<BreadCrumbs />
			<h1 class="title">Подписки «Клерка»</h1>
			<Tabs />
		</header>

		<section class="container">
			<h2 class="mailing"> Выберите рассылки, которые подходят именно вам	</h2>
			<Input @submitForm=submitForm />
			<SmallSwitcher @checked=onAllCardsToggleStateChanged />
			<CardCollection :cards=cards />
		</section>

		<img class="m-auto mb-12" src="./assets/Chuvak.svg" alt="chuvak">

	</div>

</template>

<script>
export default {
	data() {
		return {
			cards: mock.map(item => ({
				...item,
				checked: item.checked || false
			}))
		}
	},
	methods: {
		onAllCardsToggleStateChanged(state) {
			this.cards = this.cards.map(card => card && {
				...card,
				checked: state
			})
		},

		async submitForm(inputValue) {
			const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
				email: inputValue,
      			subscriptions: this.cards,
			});
		}
	}
}
</script>
