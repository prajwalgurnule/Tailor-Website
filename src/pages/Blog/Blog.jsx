import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiSearch, FiX, FiChevronDown, FiClock, FiHeart, FiShare2, FiBookmark } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [selectedTags, setSelectedTags] = useState([]);

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Sustainable Fashion",
      excerpt: "Exploring how eco-friendly materials are revolutionizing the fashion industry and what it means for consumers.",
      category: "fashion",
      tags: ["sustainability", "trends", "eco-friendly"],
      date: "2025-10-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      content: `<p>The fashion industry is undergoing a significant transformation as sustainability becomes a key concern for both brands and consumers. With growing awareness about environmental issues, more companies are adopting eco-friendly practices in their production processes.</p>
                <p>From organic cotton to recycled polyester, sustainable materials are becoming more accessible and affordable. Major brands are now incorporating these materials into their collections, proving that fashion can be both stylish and environmentally responsible.</p>
                <p>Consumers are also playing a crucial role in this shift. By choosing sustainable options and supporting ethical brands, they're sending a clear message to the industry about their values and expectations.</p>`,
      author: {
        name: "Emma Johnson",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        role: "Fashion Editor"
      },
      likes: 142,
      comments: 28
    },
    {
      id: 2,
      title: "Minimalist Wardrobe: Less is More",
      excerpt: "How building a capsule wardrobe can simplify your life and reduce decision fatigue.",
      category: "lifestyle",
      tags: ["minimalism", "organization", "style"],
      date: "2025-09-28",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      content: `<p>The concept of a minimalist wardrobe, or capsule wardrobe, has gained popularity in recent years as people seek to simplify their lives. The idea is to own fewer, higher-quality pieces that can be mixed and matched to create numerous outfits.</p>
                <p>Benefits of a minimalist wardrobe include reduced decision fatigue in the morning, less time spent on laundry and organization, and a more cohesive personal style. It also encourages more mindful consumption and can save money in the long run.</p>
                <p>Building a capsule wardrobe starts with assessing your current closet, identifying your most-worn pieces, and gradually phasing out items that don't serve you. The goal is to create a collection of 30-50 items (including shoes and accessories) that work well together and reflect your personal style.</p>`,
      author: {
        name: "Michael Chen",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        role: "Lifestyle Coach"
      },
      likes: 98,
      comments: 15
    },
    {
      id: 3,
      title: "DIY: Upcycling Old Clothes",
      excerpt: "Creative ways to breathe new life into garments you no longer wear instead of throwing them away.",
      category: "diy",
      tags: ["upcycling", "crafts", "sustainability"],
      date: "2025-09-10",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      content: `<p>Upcycling is a creative and eco-friendly way to extend the life of your clothing. Instead of discarding items you no longer wear, you can transform them into something new and exciting.</p>
                <p>Simple upcycling projects include turning old jeans into stylish shorts, transforming t-shirts into tote bags, or adding embroidery to plain garments. These projects not only reduce waste but also give your clothes a personal touch.</p>
                <p>For those new to sewing or crafting, there are many no-sew upcycling options available. Fabric paints, patches, and simple cutting techniques can create dramatic transformations with minimal skills required.</p>`,
      author: {
        name: "Sarah Williams",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        role: "DIY Expert"
      },
      likes: 215,
      comments: 42
    },
    {
      id: 4,
      title: "The Psychology of Color in Fashion",
      excerpt: "How the colors you wear affect your mood and how others perceive you.",
      category: "psychology",
      tags: ["color theory", "style", "behavior"],
      date: "2025-08-22",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      content: `<p>Color psychology plays a significant role in fashion, influencing both how we feel when we wear certain colors and how others perceive us. Different colors can evoke different emotions and associations.</p>
                <p>For example, blue is often associated with trust and stability, making it a popular choice for professional settings. Red can convey confidence and passion, while green is connected to nature and tranquility.</p>
                <p>Understanding color psychology can help you make more intentional clothing choices based on the impression you want to make or the mood you want to cultivate. It's also valuable for creating balanced outfits that communicate your desired message.</p>`,
      author: {
        name: "Dr. Lisa Rodriguez",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        role: "Behavioral Psychologist"
      },
      likes: 178,
      comments: 31
    },
    {
      id: 5,
      title: "Seasonal Fabric Guide: What to Wear When",
      excerpt: "Choosing the right fabrics for each season to stay comfortable and stylish year-round.",
      category: "fashion",
      tags: ["fabrics", "seasonal", "comfort"],
      date: "2025-08-05",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      content: `<p>Choosing the right fabrics for each season can make a significant difference in your comfort and style. Different materials have unique properties that make them more suitable for certain weather conditions.</p>
                <p>For summer, lightweight, breathable fabrics like linen, cotton, and chambray are ideal. These materials allow air circulation and help wick away moisture. In winter, opt for wool, cashmere, and fleece that provide insulation and warmth.</p>
                <p>Transitional seasons like spring and fall call for versatile fabrics that can layer well, such as denim, corduroy, and medium-weight knits. Understanding fabric properties will help you build a more functional wardrobe.</p>`,
      author: {
        name: "David Park",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        role: "Textile Specialist"
      },
      likes: 87,
      comments: 12
    },
    {
      id: 6,
      title: "The History of Denim: From Workwear to Fashion Staple",
      excerpt: "Tracing the evolution of denim from its utilitarian roots to its current status as a wardrobe essential.",
      category: "history",
      tags: ["denim", "fashion history", "trends"],
      date: "2025-07-18",
      readTime: "8 min read",
      image: "https://thursdayboots.com/cdn/shop/products/1024x1024-Mens-Jackets-Denim-Trucker-WashedIndigo-010423-1.jpg?v=1673282143&width=816",
      content: `<p>Denim has come a long way from its origins as durable workwear for miners and laborers in the 19th century. The fabric's journey to becoming a fashion staple is a fascinating reflection of cultural shifts and changing attitudes.</p>
                <p>In the 1950s, denim became a symbol of rebellion through its association with youth culture and movie stars like James Dean. The 1970s saw the rise of designer jeans, elevating denim to high fashion status.</p>
                <p>Today, denim is one of the most versatile and universally worn fabrics, available in countless styles, washes, and fits. Its enduring popularity speaks to its unique combination of durability, comfort, and timeless style.</p>`,
      author: {
        name: "Jonathan Meyer",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        role: "Fashion Historian"
      },
      likes: 156,
      comments: 24
    }
  ];

  // Get all unique tags from posts
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  // Filter posts based on active category, search query, and selected tags
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => post.tags.includes(tag));
    
    return matchesCategory && matchesSearch && matchesTags;
  });

  // Sort posts based on selected sort option
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'oldest') {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === 'popular') {
      return b.likes - a.likes;
    }
    return 0;
  });

  // Open post modal
  const openPostModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close post modal
  const closePostModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Toggle tag selection
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Close modal when clicking outside content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isModalOpen && event.target.classList.contains('modal-overlay')) {
        closePostModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Style Insights & Trends
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle"
          >
            Discover the latest in fashion, lifestyle, and sustainable living
          </motion.p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-container">
        {/* Filters and Search */}
        <div className="blog-controls">
          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>
                <FiX />
              </button>
            )}
          </div>

          <div className="filter-controls">
            <button 
              className="filter-toggle"
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            >
              Filters <FiChevronDown className={`chevron ${isFiltersOpen ? 'open' : ''}`} />
            </button>

            {/* <div className="sort-dropdown">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
              </select>
            </div> */}
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {isFiltersOpen && (
              <motion.div
                className="expanded-filters"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="category-filters">
                  <h4>Categories</h4>
                  <div className="category-buttons">
                    <button
                      className={activeCategory === 'all' ? 'active' : ''}
                      onClick={() => setActiveCategory('all')}
                    >
                      All
                    </button>
                    {[...new Set(blogPosts.map(post => post.category))].map(category => (
                      <button
                        key={category}
                        className={activeCategory === category ? 'active' : ''}
                        onClick={() => setActiveCategory(category)}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="tag-filters">
                  <h4>Tags</h4>
                  <div className="tag-buttons">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        className={selectedTags.includes(tag) ? 'active' : ''}
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Blog Posts Grid */}
        <div className="blog-grid">
          {sortedPosts.length > 0 ? (
            <AnimatePresence>
              {sortedPosts.map(post => (
                <motion.article
                  key={post.id}
                  className="blog-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  onClick={() => openPostModal(post)}
                >
                  <div className="card-image">
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <div className="category-badge">{post.category}</div>
                  </div>
                  <div className="card-content">
                    <div className="meta-info">
                      <span className="date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span className="read-time"><FiClock /> {post.readTime}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p className="excerpt">{post.excerpt}</p>
                    <div className="tags">
                      {post.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="card-footer">
                      <div className="author">
                        <img src={post.author.avatar} alt={post.author.name} className="avatar" />
                        <div>
                          <span className="name">{post.author.name}</span> 
                        </div>
                         <span className="role">{post.author.role}</span>
                      </div>
                      <div className="stats">
                        <span><FiHeart /> {post.likes}</span>
                        <span><FaRegComment /> {post.comments}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          ) : (
            <div className="no-results">
              <h3>No posts found matching your criteria</h3>
              <p>Try adjusting your filters or search query</p>
              <button 
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                  setSelectedTags([]);
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPost && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="post-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <button className="close-modal" onClick={closePostModal}>
                x
              </button>

              <div className="modal-header">
                <div className="header-content">
                  <div className="category-badge">{selectedPost.category}</div>
                  <h2>{selectedPost.title}</h2>
                  <div className="meta-info">
                    <div className="author">
                      <img src={selectedPost.author.avatar} alt={selectedPost.author.name} className="avatar" />
                      <div>
                        <span className="name">{selectedPost.author.name}</span>    
                      </div>
                      <span className="role">{selectedPost.author.role}</span>
                    </div>
                    <div className="date-time">
                      <span className="date">{new Date(selectedPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span className="read-time"><FiClock /> {selectedPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="header-image">
                  <img src={selectedPost.image} alt={selectedPost.title} />
                </div>
              </div>

              <div className="modal-content">
                <div className="content-main">
                  <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                </div>

                <div className="content-sidebar">
                  <div className="sidebar-section tags">
                    <h4>Tags</h4>
                    <div className="tag-list">
                      {selectedPost.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="sidebar-section actions">
                    <button className="action-button">
                      <FiHeart /> Like ({selectedPost.likes})
                    </button>
                    <button className="action-button">
                      <FaRegComment /> Comment ({selectedPost.comments})
                    </button>
                    <button className="action-button">
                      <FiShare2 /> Share
                    </button>
                    <button className="action-button">
                      <FiBookmark /> Save
                    </button>
                  </div>

                  <div className="sidebar-section related-posts">
                    <h4>Related Posts</h4>
                    {blogPosts
                      .filter(post => 
                        post.id !== selectedPost.id && 
                        (post.category === selectedPost.category || 
                         post.tags.some(tag => selectedPost.tags.includes(tag))))
                      .slice(0, 2)
                      .map(post => (
                        <div key={post.id} className="related-post" onClick={() => {
                          setSelectedPost(post);
                          window.scrollTo(0, 0);
                        }}>
                          <img src={post.image} alt={post.title} />
                          <div>
                            <h5>{post.title}</h5>
                            <span className="read-time"><FiClock /> {post.readTime}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogPage;

// CSS Styles
const styles = `
.blog-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: #2d3748;
  line-height: 1.6;
  background-color: #f8fafc;
}

/* Hero Section */
.blog-hero {
  position: relative;
  height: 500px;
  background: linear-gradient(rgba(28, 39, 79, 0.85), rgba(28, 39, 79, 0.85)), 
              url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80');
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
  padding: 0 20px;
  margin-bottom: 60px;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.blog-hero h1 {
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
  color: #c69b7b;
}

.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto 30px;
  font-weight: 400;
}

/* Blog Container */
.blog-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* Blog Controls */
.blog-controls {
  margin-bottom: 40px;
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.05);
}

.search-bar {
  position: relative;
  max-width: 500px;
  margin-bottom: 20px;
}

.search-bar input {
  width: 100%;
  padding: 14px 20px 14px 50px;
  border: 2px solid #e2e8f0;
  border-radius: 30px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f8fafc;
}

.search-bar input:focus {
  outline: none;
  border-color: #c69b7b;
  box-shadow: 0 0 0 3px rgba(198, 155, 123, 0.2);
  background-color: white;
}

.search-icon {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  font-size: 1.1rem;
}

.clear-search {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 5px;
  font-size: 1.1rem;
}

.clear-search:hover {
  color: #64748b;
}

.filter-controls {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.filter-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 10px 18px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #334155;
}

.filter-toggle:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
}

.chevron {
  transition: transform 0.2s ease;
  color: #64748b;
}

.chevron.open {
  transform: rotate(180deg);
}

.sort-dropdown select {
  padding: 10px 18px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  background-color: white;
  color: #334155;
  transition: all 0.2s ease;
}

.sort-dropdown select:hover {
  border-color: #cbd5e1;
}

.sort-dropdown select:focus {
  outline: none;
  border-color: #c69b7b;
  box-shadow: 0 0 0 3px rgba(198, 155, 123, 0.2);
}

/* Expanded Filters */
.expanded-filters {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 25px;
  margin-top: 15px;
  overflow: hidden;
}

.expanded-filters h4 {
  margin-bottom: 15px;
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.category-filters, .tag-filters {
  margin-bottom: 25px;
}

.category-buttons, .tag-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.category-buttons button, .tag-buttons button {
  padding: 8px 16px;
  border: 2px solid #e2e8f0;
  background: white;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #334155;
}

.category-buttons button:hover, .tag-buttons button:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
}

.category-buttons button.active, .tag-buttons button.active {
  background: #c69b7b;
  color: white;
  border-color: #c69b7b;
  box-shadow: 0 2px 4px rgba(198, 155, 123, 0.2);
}

/* Blog Grid */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.blog-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e2e8f0;
}

.blog-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transform: translateY(-3px);
  border-color: #cbd5e1;
}

.card-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.blog-card:hover .card-image img {
  transform: scale(1.05);
}

.category-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #c69b7b;
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: capitalize;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card-content {
  padding: 25px;
}

.meta-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 0.85rem;
  color: #64748b;
}

.meta-info .date {
  margin-right: 15px;
}

.meta-info .read-time {
  display: flex;
  align-items: center;
  gap: 5px;
}

.blog-card h3 {
  font-size: 1.4rem;
  margin-bottom: 12px;
  line-height: 1.3;
  color: #1e293b;
  font-weight: 700;
}

.excerpt {
  color: #475569;
  margin-bottom: 15px;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.6;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  background: #f1f5f9;
  color: #334155;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}

.tag:hover {
  background: #e2e8f0;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid #e2e8f0;
}

.author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e2e8f0;
}

.author .name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e293b;
}

.author .role {
  font-size: 0.75rem;
  color: #64748b;
}

.stats {
  display: flex;
  gap: 15px;
  font-size: 0.85rem;
  color: #64748b;
}

.stats span {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
}

/* No Results */
.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 80px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

.no-results h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #1e293b;
  font-weight: 700;
}

.no-results p {
  margin-bottom: 25px;
  color: #64748b;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.no-results button {
  background: #c69b7b;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(198, 155, 123, 0.2);
}

.no-results button:hover {
  background: #b28b6d;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow-y: auto;
  backdrop-filter: blur(5px);
}

.post-modal {
  background: white;
  border-radius: 16px;
  max-width: 1200px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid #e2e8f0;
}

.close-modal {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  color: #ffffff;
  transition: all 0.2s ease;
}

.close-modal:hover {
  background: rgba(0, 0, 0, 0.15);
  color: red;
}

.modal-header {
  display: flex;
  position: relative;
  min-height: 350px;
}

.header-content {
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:rgb(224, 229, 234);
}

.header-image {
  flex: 1;
}

.header-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-header .category-badge {
  position: static;
  display: inline-block;
  margin-bottom: 20px;
  align-self: flex-start;
}

.modal-header h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  line-height: 1.3;
  color: #1e293b;
  font-weight: 800;
  letter-spacing: -0.025em;
}

.meta-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 0;
}

.modal-header .author {
  margin-bottom: 15px;
  align-items: center;
}

.modal-header .avatar {
  width: 56px;
  height: 56px;
  border: 2px solid #e2e8f0;
}

.modal-header .name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
}

.modal-header .role {
  font-size: 0.9rem;
  color: #64748b;
}

.modal-header .date-time {
  display: flex;
  gap: 20px;
  font-size: 0.95rem;
  color: #64748b;
  align-items: center;
}

.modal-header .date-time span {
  display: flex;
  align-items: center;
  gap: 6px;
}

.modal-content {
  display: flex;
  padding: 50px;
}

.content-main {
  flex: 2;
  padding-right: 50px;
}

.content-main p {
  margin-bottom: 24px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #334155;
}

.content-main p:last-child {
  margin-bottom: 0;
}

.content-sidebar {
  flex: 1;
  padding-left: 30px;
  border-left: 1px solid #e2e8f0;
}

.sidebar-section {
  margin-bottom: 40px;
}

.sidebar-section h4 {
  font-size: 1.1rem;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e2e8f0;
  color: #1e293b;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.modal .tag {
  font-size: 0.85rem;
  padding: 6px 14px;
  background: #f1f5f9;
  color: #334155;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.modal .tag:hover {
  background: #e2e8f0;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 12px 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  font-weight: 500;
  color: #334155;
}

.action-button:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
}

.action-button svg {
  font-size: 1.1rem;
}

.related-post {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.2s ease;
  border: 1px solid #e2e8f0;
}

.related-post:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
  transform: translateX(3px);
}

.related-post img {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
}

.related-post h5 {
  font-size: 0.95rem;
  margin-bottom: 5px;
  color: #1e293b;
  font-weight: 600;
}

.related-post .read-time {
  font-size: 0.8rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 5px;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .blog-hero h1 {
    font-size: 3rem;
  }
  
  .modal-content {
    padding: 40px;
  }
  
  .content-main {
    padding-right: 40px;
  }
}

@media (max-width: 1024px) {
  .blog-hero h1 {
    font-size: 2.5rem;
  }
  
  .modal-header {
    flex-direction: column;
  }
  
  .header-content {
    padding: 40px;
  }
  
  .header-image {
    height: 350px;
  }
  
  .modal-content {
    flex-direction: column;
    padding: 40px;
  }
  
  .content-main {
    padding-right: 0;
    margin-bottom: 40px;
  }
  
  .content-sidebar {
    padding-left: 0;
    border-left: none;
    border-top: 1px solid #e2e8f0;
    padding-top: 40px;
  }
}

@media (max-width: 768px) {
  .blog-hero {
    height: 400px;
  }
  
  .blog-hero h1 {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .blog-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-header h2 {
    font-size: 1.8rem;
  }
  
  .modal-header .date-time {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .modal-content {
    padding: 30px;
  }
}

@media (max-width: 576px) {
  .blog-hero {
    height: 350px;
  }
  
  .blog-hero h1 {
    font-size: 1.8rem;
  }
  
  .filter-controls {
    flex-direction: column;
  }
  
  .header-content {
    padding: 30px 25px;
  }
  
  .modal-header h2 {
    font-size: 1.6rem;
  }
  
  .post-modal {
    max-height: 95vh;
  }
  
  .content-main p {
    font-size: 1rem;
  }
}
`;

// Add styles to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);