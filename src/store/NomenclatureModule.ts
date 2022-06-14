import api from "@/plugins/axios";
import router from '@/router';

export default {
    state: {
        nomenclature_all: [] as any [],

        // one_nomenclature
        choise_nomenclature: undefined as number | undefined,
    },
    mutations: {
    },
    actions: {
        getNomenclature({
            commit, state
        }:any, payload:any) {
            // psz - count prood on page
          api.get(`marketplace/nomenclature/`).then((response:any)=>{
            console.log(response);
            if(response.status === 200) {
                state.nomenclature_all = response.data.results
            }
          })
        },


        // for NomenclatureOne
        getOneNomenclature({
          commit, state
        }:any, payload:any) {
          state.choise_nomenclature = payload;
          api.get(`marketplace/nomenclature/${payload}`).then((response:any)=>{
            console.log(response);
          })
        }
    },
    modules: {
    },
    namespaced: true,
  }
  