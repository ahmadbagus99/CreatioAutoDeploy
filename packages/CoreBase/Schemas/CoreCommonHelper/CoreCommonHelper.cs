using System;
using System.Text;
using System.Data;
using System.Collections;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Entities;

namespace CoreBase.CoreCommonHelper
{
    public class CommonHelper
    {
        public static string NormalizePhone(string phone)
        {
            if (string.IsNullOrWhiteSpace(phone)) return null;

            phone = phone.Trim();
            phone = phone.Replace(" ", "").Replace("-", "");

            if (phone.StartsWith("+62")) {
                return phone;
            } else if (phone.StartsWith("0")) {
                return "+62" + phone.Substring(1);
            } else if (phone.StartsWith("62")) {
                return "+" + phone;
            }

            return "+62" + phone;
        }

        public static DateTime? ParseTanggal(string tanggal) {
            if (string.IsNullOrWhiteSpace(tanggal) || tanggal == "0000-00-00") {
                return DateTime.MinValue;
            }
            if (DateTime.TryParse(tanggal, out DateTime result)) {
                return result;
            }
            return DateTime.MinValue;
        }

        public static int ParseInteger(string input) {
            if (string.IsNullOrWhiteSpace(input)) {
                return 0;
            }

            if (int.TryParse(input, out int result)) {
                return result;
            }

            return 0;
        }

        public static decimal? ParseDecimal(string input) {
            if (string.IsNullOrWhiteSpace(input)) {
                return 0;
            }

            if (decimal.TryParse(input, out decimal result)) {
                return result;
            }

            return 0;
        }

        public static string ParseString(string input, bool useTitleCase = true) {
            if (string.IsNullOrWhiteSpace(input)) {
                return string.Empty;
            }

            return useTitleCase ? ToTitleCase(input.Trim()) : input;
        }

        public static T GetData<T>(object data) {
            if (data == null) return default;

            if (data is JObject jObject) {
                return jObject.ToObject<T>();
            }
            if (data is JArray jArray) {
                return jArray.ToObject<T>();
            }

            return JsonConvert.DeserializeObject<T>(data.ToString());
        }

		public static string ToTitleCase(string value)
		{
		    if (string.IsNullOrWhiteSpace(value)) {
		        return string.Empty;
		    }
		
		    var words = value.Trim().ToLower().Split(' ');
		    for (int i = 0; i < words.Length; i++) {
		        if (words[i].Length > 0) {
		            words[i] = char.ToUpper(words[i][0]) + words[i].Substring(1);
		        }
		    }
		    return string.Join(" ", words);
		}
    }
}
