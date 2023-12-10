import React, { useState, useEffect } from 'react'
import TextField from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";
import { Link } from './Link'

const MIN_SEARCH_LENGTH = 3;

export function SearchPage() {
  const [yaMarketLink, setYaMarketLink] = useState<string>(``);
  const [wildberriesLink, setWildberriesLink] = useState<string>(``);
  const [ozonLink, setOzonLink] = useState<string>(``);

  const getLinks = (value: string): void => {
    if (value.length >= MIN_SEARCH_LENGTH) {
      setYaMarketLink(`https://market.yandex.ru/search?text=${value}`);
      setWildberriesLink(
        `https://catalog-ads.wildberries.ru/api/v6/search?keyword=${value}`
      );
      setOzonLink(`https://www.ozon.ru/search/?text=${value}&from_global=true`);
    } else {
      setYaMarketLink('');
      setWildberriesLink('');
      setOzonLink('');
    }

  }

  return (
    <div className="search-page">
      <div className="search-page__settings">
        <h1>Поиск по всем маркетплейсам сразу</h1>
        <TextField
          placeholder="Искать товары"
          InputProps={{
            startAdornment: <Search fontSize="small" />
          }}
          onChange={(e) => getLinks(e.target.value)}
        />
      </div>
      <div className="search-page__links">
        <Link link={yaMarketLink} title="Я.маркет" />
        <Link link={wildberriesLink} title="Wildberries" />
        <Link link={ozonLink} title="Ozon" />
      </div>
    </div>
  );
}
