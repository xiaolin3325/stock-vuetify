<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="15"
    :sort-by="[]"
    :sort-desc="[false, true]"
    multi-sort
    class="elevation-1"
  >
    <template v-slot:top>
      <tr>
        <td></td>
        <td>
          <v-text-field v-model="counts" type="number" label="Equal to"></v-text-field>
        </td>
        <td colspan="4"></td>
      </tr>
    </template>
  </v-data-table>
</template>


<script>
import axios from "axios";
import config from "@/config/appconfig";
export default {
  name: "Realtime",
  components: {},
  data() {
    return {
      counts: '',
      headers: [
        {
          text: "日期",
          align: "center",
          sortable: false,
          value: "date",
        },
        {
          text: "时间",
          align: "center",
          sortable: false,
          value: "time",
        },
        { text: "名称", value: "name" },
        { text: "代码", value: "ts_code" },
        { text: "价格", value: "price" },
        { text: "涨幅", value: "change" },
        { text: "百分比 (%)", value: "pchg" },
        {
          text: "板数",
          value: "counts",
          filter: (value) => {
            if (!this.counts) return true;
            return value === parseInt(this.counts);
          },
        },
        { text: "上市日期", value: "list_date" },
      ],
      desserts: [],
    };
  },
  mounted() {
    this.computed();
  },
  methods: {
    computed() {
      let instince = axios.create({
        baseURL: config.baseURL,
        timeout: 1000 * 5,
      });
      instince.get("/realtimeprice").then((response) => {
        this.desserts = response.data;
      });
    },
  },
};
</script>

<style lang='stylus' scoped></style>