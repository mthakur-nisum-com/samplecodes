let filterBuilder = (function () {
    function buildPbiFilter(table, column, operator, value, values) {
        const basicFilter = {
            $schema: 'http://powerbi.com/product/schema#basic',
            target: {
                table: table,
                column: column
            },
            operator: operator,
            filterType: 1
        };

        if (value) {
            basicFilter.value = value;
        } else {
            basicFilter.values = values;
        }

        return basicFilter;
    }

    function buildKendoFilter(field, operator, value) {
        const filter = { field: field, operator: operator, value: value };
        return filter;
    }

    function composeFilter(junctionType, filters) {
        const filter = {
            logic: junctionType,
            filters: filters
        };
        return filter;
    }

    return {
        buildBasicPbiFilter: function (table, column, operator, value, values) {
            return buildPbiFilter(table, column, operator, value, values);
        },
        buildSingleKendoFilter: function (field, operator, value) {
            return buildKendoFilter(field, operator, value);
        },
        buildJunctionKendoFilter: function (junctionType, field, operator, values) {
            const filter = {
                logic: junctionType,
                filters: values.map(v => buildKendoFilter(field, operator, v))
            };

            return filter;
        },
        buildComposedKendoFilter: function (junctionType, filters) {
            return composeFilter(junctionType, filters);
        },
        buildComposedSingleKendoFilter: function (field, operator, value) {
            return composeFilter('and', [buildKendoFilter(field, operator, value) ]);
        }
    };
}());

export { filterBuilder };
