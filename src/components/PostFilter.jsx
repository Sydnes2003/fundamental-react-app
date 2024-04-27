import React from 'react';
import CustomInput from "./UI/input/CustomInput";
import CustomSelect from "./UI/select/CustomSelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <CustomInput
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
                placeholder="Поиск..."
            />
            <CustomSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    {value: "title", name: "По названию"},
                    {value: "body", name: "По описанию"}
                ]}
                defaultValue="Сортировка"
            />
        </div>
    );
};

export default PostFilter;