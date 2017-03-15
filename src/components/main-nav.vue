<template>
<div>
	<ul>
		<li>
			<router-link to="/">recommend</router-link>
		</li>
		<li>
			<router-link to="/rank">rank</router-link>
		</li>
		<li>
			<router-link to="/mine">mine</router-link>
		</li>
	</ul>
</div>
</template>

<script>
export default {
	name: "mainNav"
}
</script>

<style lang="scss">
@import "../lib/sass/mixin";

ul{
	width: 100%;

	position: fixed;
	bottom: 0;
	left: 0;

	text-align: center;

	@include clearfix();

	&::after{
		content: "";
		clear: both;
	}

	li{
		width: 33.3333%;

		float: left;
	}
}
</style>
