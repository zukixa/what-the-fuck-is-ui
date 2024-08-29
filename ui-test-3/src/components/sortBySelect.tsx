import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel,
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
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={trigger}>{activeSelect}</SelectValue>
            </SelectTrigger>
            
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{trigger}</SelectLabel>
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
