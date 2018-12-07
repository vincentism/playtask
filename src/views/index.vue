<template>
	<div class="lcontent">
		<lheader>

		</lheader>

		<radio-button class="task-tab"
					  @change="switchTab"
					  v-model="list">
		</radio-button>

		<list-item v-for="(v, i) in taskFilter(completed)"
				   :v="v"
				   @complete="completeTask">
		</list-item>

		<div class="bottom"> 
			<span>{{ score }}</span>
			<div @click="completed = !completed">
				<span v-if="!completed" class="icon-uncomplete"></span>
				<img v-else class="icon-complete" src="../assets/icon-complete.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	import { lheader, listItem, radioButton } from '../components';
	import { mapState, mapMutations, mapGetters } from 'vuex';
	export default {
		components: {
			radioButton,
			listItem
		},
		data() {
			return {
				list: [{
					label: '每日任务',
				}, {
					label: '每周任务',
				}, {
					label: '普通任务',
				}],
				completed: false
			}
		},
		computed: {
			...mapState(['taskList']),
			...mapGetters([
			    'score',
                'taskFilter'
			]),
		},
		methods: {
			switchTab(i) {
				console.log('i', i);
			},

            completeTask(id) {
			    this.taskList.find(item => {
			        if (item.id === id) {
			            item.completed = !item.completed;
                        this.UPDATETASKLIST(this.taskList);
			            return true;
					}
				});
			},

			...mapMutations([
			    'UPDATETASKLIST'
			])
		},
		mounted() {
            this.UPDATETASKLIST([{
                id: 1,
                title: '111',
                completed: true,
                score: 10,
                loopable: true,
				looptime: 10,
            }, {
                id: 2,
                title: '222',
                completed: false,
                score: 10,
                loopable: true,
                looptime: 10,
            }]);
		}
	}
</script>

<style lang="less">
	.lcontent {
		padding: 52px 0;
		text-align: center;
		.task-tab {
			margin: 10px auto;
		}

		.bottom {
			width: 100%;
			position: fixed;
			bottom: 52px;
			left: 0;
			display: flex;
			justify-content: space-between;
			padding: 20px;
			box-sizing: border-box;
		}

		.icon-uncomplete {
			display: inline-block;
			width: 26px;
			height: 26px;
			border: 1px solid #bdbdbd;
			border-radius: 100%;
		}
		.icon-complete {
			width: 28px;
			height: 28px;
		}
	}
</style>