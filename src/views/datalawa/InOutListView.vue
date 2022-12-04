<!-- <template>
    <div class="content-box">
        입출차 기록 상세보기
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>날짜</th>
                    <th>동</th>
                    <th>호수</th>
                    <th>차종</th>
                    <th>구분</th>
                    <th>입차시간</th>
                    <th>출차시간</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(list,i) in inoutdata">
                    <td>{{ list.idx }}</td>
                    <td>{{ list.date }}</td>
                    <td>{{ list.dong }}</td>
                    <td>{{ list.ho }}</td>
                    <td>{{ list.kindcar }}</td>
                    <td>{{ list.visit }}</td>
                    <td>{{ list.intime }}</td>
                    <td>{{ list.outtime }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      inoutdata: [{ idx: '1', date: '2022-09-12', dong: '101', ho: '1101', kindcar: '소형', visit: '방문', intime: '12:34:56', outtime: '12:34:56' }]
    }
  },
  setup() {},
  created() {},
  unmounted() {},
  methods: {}
}
</script>

<style scoped>
td, th {
  padding: 10px;
}
.content-box {
    box-sizing: content-box;
    position:relative;
    height: 450px;
    width: 1000px;
    left: 321px;
    top: 375px;
    border-radius: 18px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px 0px #00000040;
}
</style> -->

<template>
    <div>
        <h3>입출차 기록 상세보기</h3>
          <v-table class="content-box">
          <thead>
              <tr>
              <th>
                  번호
              </th>
              <th>
                  날짜
              </th>
              <th>
                  동
              </th>
              <th>
                  호수
              </th>
              <th>
                  차종
              </th>
              <th>
                  구분
              </th>
              <th>
                  입차시간
              </th>
              <th>
                  출차시간
              </th>
              </tr>
          </thead>
          <tbody>
              <tr :key="i.idx" v-for="i in (0,20)">
                          <td>{{ i }}</td>
                          <td><InOutData :date="date"/>date</td>
                          <td><InOutData :dong="dong"/>dong</td>
                          <td><InOutData :ho="ho"/>ho</td>
                          <td><InOutData :kind="kind"/>kind</td>
                          <td><InOutData :visit="visit"/>visit</td>
                          <td><InOutData :intime="intime"/>intime</td>
                          <td><InOutData :outtime="outtime"/>outtime</td>
              </tr>
          </tbody>
          </v-table>
    </div>
  </template>

<script>
import InOutData from '@/components/InOutData'

export default {
  components: {InOutData},
  data () {
    return {
    //   inoutdata: [
    //     {
    //     idx: '1',
    //     date: '2022-09-12',
    //     dong: '101',
    //     ho: '1101',
    //     kindcar: '소형',
    //     visit: '방문',
    //     intime: '12:34:56',
    //     outtime: '12:34:56'
    //   }, {
    //     idx: '2',
    //     date: '2022-09-13',
    //     dong: '101',
    //     ho: '1101',
    //     kindcar: '소형',
    //     visit: '방문',
    //     intime: '12:34:56',
    //     outtime: '12:34:56'
    //   }, {
    //     idx: '3',
    //     date: '2022-09-14',
    //     dong: '101',
    //     ho: '1101',
    //     kindcar: '소형',
    //     visit: '방문',
    //     intime: '12:34:56',
    //     outtime: '12:34:56'
    //   }, {
    //     idx: '4',
    //     date: '2022-09-15',
    //     dong: '101',
    //     ho: '1101',
    //     kindcar: '소형',
    //     visit: '방문',
    //     intime: '12:34:56',
    //     outtime: '12:34:56'
    //   }, {
    //     idx: '5',
    //     date: '2022-09-16',
    //     dong: '101',
    //     ho: '1101',
    //     kindcar: '소형',
    //     visit: '방문',
    //     intime: '12:34:56',
    //     outtime: '12:34:56'
    //   }]
    }
  }
}
</script>
