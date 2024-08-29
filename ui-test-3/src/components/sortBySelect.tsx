import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup
} from "@/components/ui/select";

interface SortItems<SelectType extends string> {
    trigger: string;
    items: SelectType[];
    activeSelect: SelectType;
    setSelect: (value: SelectType) => void;
}

export const SortBySelect = <SelectType extends string>({
    trigger,
    items,
    activeSelect,
    setSelect,
}: SortItems<SelectType>) => {
    return (
       
        <Select value={activeSelect} onValueChange={(value) => setSelect(value as SelectType)}>
            <div className="flex items-center">
            {trigger}:  
            <SelectTrigger className="w-[180px] ml-2">
                <SelectValue placeholder={trigger}>{activeSelect}</SelectValue>
            </SelectTrigger>
            </div>
            <SelectContent>
                <SelectGroup>
                    {items.map((item) => (
                        <SelectItem key={item} value={item}>
                            {item}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
