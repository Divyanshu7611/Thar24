import React from 'react'
export default function SearchBar({ searchData, setSearchData }) {
  function filterSearchData(query) {
    let newSearch = searchData.find(data => data.eventName == `\b${query}\w*\b`)
    // setSearchData(newSearch)
  }

  return (
    <form className="w-full max-w-xl flex items-center justify-center gap-x-4 px-2">
      <input
        type="text"
        placeholder="Search Competitions"
        className="input input-bordered w-full bg-base-100/50"
        onChange={e => filterSearchData(e.target.value.toLocaleUpperCase())}
      />
    </form>
  )
}
