import React from 'react';
import DefaultInput from "./UI/input/DefaultInput";
import DefaultSelect from "./UI/select/DefaultSelect";

const PostFilter = ({filter, setFilter, className}) => {
    return (
        <div className={className}>
            <DefaultInput
                className={[className.split(/_+/gmi)[0], '__input'].join('')}
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
                placeholder="Поиск..."
            />
            <DefaultSelect
                className={[className.split(/_+/gmi)[0], '__select'].join('')}
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    {value: "id", name: "По номеру"},
                    {value: "body", name: "По описанию"},
                    {value: "title", name: "По названию"}
                ]}
                defaultValue="Сортировка"
            />
        </div>
    );
};

export default PostFilter;